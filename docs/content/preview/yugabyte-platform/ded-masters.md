```markdown
## Dedicated Master Nodes

Availability
GA - Generally Available

Type
New Feature

Location in Docs Site
Under Deployment Options

Applicable Releases/Backports
2.18, 2.20

Related Issues
None

IDEA
IDEA-457

### Introduction
The "Dedicated Master Nodes" feature in YugabyteDB Anywhere enhances deployment configurations by allowing YB-Master processes to run on dedicated nodes. This separation from YB-TServer processes optimizes resource allocation, reduces contention, and improves the performance and stability of YB-Master operations, particularly in large or heavily utilized universes.

### Unsupported Scenarios

1. **Kubernetes Support:** The dedicated master node placement is not supported for universes deployed on Kubernetes.
2. **Post-Deployment Conversion:** It is not possible to convert an existing shared-master universe to a dedicated-master universe or vice versa.
3. **Mixed Deployments:** Deploying some masters dedicated and some shared within the same universe is not supported.

### Feature Details

#### Universe Creation Option

- During universe creation in YugabyteDB Anywhere, users can choose the "Place Masters on dedicated nodes (Dedicated Masters)" option for resource isolation.
- This option is available alongside the existing choice to place masters on the same nodes as T-Servers.

#### Node Provisioning Logic

- Selecting "Dedicated Masters" for a universe with a replication factor (RF) of `N` will provision `N` separate nodes exclusively for YB-Master processes.
- These dedicated master nodes will not run YB-TServer processes, ensuring complete resource isolation.

#### Provider Support

- The "Dedicated Masters" option is supported on the following provider configurations:
  - AWS
  - GCP
  - Azure
  - On-Premises

#### Performance and Scalability

- Deploying YB-Masters on dedicated nodes reduces latency and enhances the responsiveness of operations like DDLs and leader elections.
- The solution supports independent scaling of dedicated master nodes, separate from T-Server nodes.

#### User Experience

- The user interface for selecting dedicated masters is designed to be intuitive, clearly explaining the implications of each deployment option.

### Example

SQL

```sql
-- Example using ysqlsh: Creating a universe with dedicated master nodes
CREATE UNIVERSE my_universe
WITH (masters_dedicated = true);

-- Example command for setting up dedicated master nodes
SELECT set_up_dedicated_masters('my_universe', 3);  -- Assuming RF=3
```

### Additional Configuration

| GFlag                        | Details                                                                                  |
|------------------------------|------------------------------------------------------------------------------------------|
| example_ysql_max_connections | Defines the maximum number of concurrent YSQL connections allowed per database instance. |
| --enable_dedicated_masters   | A boolean setting that, when enabled, activates dedicated master node deployment.        |

### Metrics

| Metric Name            | Details                                                                                           |
|------------------------|---------------------------------------------------------------------------------------------------|
| master_node_latency    | Measures the average latency of operations on dedicated master nodes.                             |
| dedicated_master_count | A counter that increments each time a dedicated master node is added or initialized in a universe. |

### Architecture

The "Dedicated Master Nodes" feature introduces a distinct node type for YB-Master processes, ensuring optimal resource allocation and performance. The architecture leverages an isolated execution environment that minimizes interference with YB-TServer nodes, promoting reliability and stability in high-demand scenarios.

### Best Practices

- **Optimal Resource Allocation:** Allocate sufficient resources (CPU, memory) to dedicated master nodes to maximize performance benefits.
- **Monitoring Strategy:** Implement monitoring for dedicated master metrics to quickly identify and address performance bottlenecks.

### Related Articles

- [Azure with YugabyteDB: A Comprehensive Deployment Guide](https://docs.yugabyte.com/latest/deploy/azure/)
- [Blog Post: Diving Deep into Our New Feature's Performance](https://blog.yugabyte.com/feature-performance)
- [YugabyteDB Fridays Tech Talk (YFTT): Understanding New Feature X](https://www.youtube.com/watch?v=tech_talk_feature_x)
```
