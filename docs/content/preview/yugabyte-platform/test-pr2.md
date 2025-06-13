```markdown

## Dedicated Master Nodes

Availability
GA - Generally Available

Type
New Feature

Location in Docs Site
Under Deployment Guides

Applicable Releases/Backports
2.18, 2.20

Related Issues
None specified

IDEA
None specified

### Introduction
The "Dedicated Master Nodes" feature in YugabyteDB Anywhere allows administrators to deploy YB-Master processes on dedicated nodes, separate from YB-TServer nodes. This configuration enhances resource isolation, optimizes performance, and offers deployment flexibility, particularly beneficial in large or heavily utilized YugabyteDB universes.

### Unsupported Scenarios

1. **Kubernetes Support:** Dedicated master node placement is not supported for universes deployed on Kubernetes.
2. **Post-Deployment Conversion:** Converting existing shared-master universes to dedicated-master universes (or vice-versa) is not supported.
3. **Mixed Deployments:** Deployments with some masters dedicated and some shared within the same universe are not allowed.

### Feature Details

#### Prerequisites
- Ensure access to YugabyteDB Anywhere with the necessary permissions to create universes.
- A replication factor (RF) configuration for the universe.

#### Universe Creation with Dedicated Masters

1. **Navigate to Universe Creation:** Access the "Create Universe" section in YugabyteDB Anywhere.
2. **Configure Universe Details:** Input basic universe details like name, replication factor, and cloud provider.
3. **Select Master Placement:**
   - Choose "Place Masters on dedicated nodes (Dedicated Masters)" in the "Master Placement" section.
4. **Provisioning:** 
   - Upon creation, YugabyteDB Anywhere provisions distinct VM instances exclusively for YB-Masters, ensuring these nodes do not run YB-TServer processes.

#### Supported Cloud Providers
- AWS
- GCP
- Azure
- On-Premises

### Example

SQL

```sql
-- Example of creating a table in a universe with dedicated master nodes
CREATE TABLE user_data (
    user_id INT PRIMARY KEY,
    username TEXT
);
```

### Additional Configuration

GFlag | Details
------|---------
`resource_isolation` | Ensures YB-Master processes are isolated on dedicated nodes.
`dedicated_master_nodes` | Enables the feature for provisioning dedicated nodes for YB-Master processes.

### Metrics

Metric Name | Details
------------|---------
`yb_master_latency` | Measures the average latency of YB-Master operations in the universe.
`dedicated_node_utilization` | Tracks the resource utilization of dedicated master nodes.

### Architecture
The architecture of the "Dedicated Master Nodes" feature creates a clear separation of roles within a YugabyteDB universe. By provisioning dedicated nodes solely for YB-Master processes, it eliminates resource contention with YB-TServers, thus improving the responsiveness of operations such as DDL executions and leader elections. This design is particularly advantageous in scenarios with high load or resource constraints.

### Best Practices

- **Optimal Resource Allocation:** Allocate sufficient CPU and memory resources to dedicated master nodes to maximize performance benefits.
- **Monitoring:** Implement monitoring strategies to track `yb_master_latency` and `dedicated_node_utilization` metrics to ensure efficient resource use.
- **Scaling Considerations:** Consider the independent scaling of dedicated master nodes to match changes in universe load or replication factor.

### Related Articles

- [Deploying YugabyteDB on Azure: A Comprehensive Guide](https://docs.yugabyte.com/latest/deploy/azure/)
- [Blog Post: Enhancing Performance with Dedicated Master Nodes](https://blog.yugabyte.com/dedicated-master-nodes-performance/)
- [YFTT: Understanding the Benefits of Dedicated Master Nodes](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

```