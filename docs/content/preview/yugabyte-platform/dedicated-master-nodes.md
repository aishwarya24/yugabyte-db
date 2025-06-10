```markdown

## Dedicated Master Nodes

Availability
GA - Generally Available

Type
New Feature

Location in Docs Site
Under YugabyteDB Anywhere / Universe Management

Applicable Releases/Backports
2.20, 2.22

Related Issues
N/A

IDEA
N/A

### Introduction
The "Dedicated Master Nodes" feature in YugabyteDB Anywhere provides the capability to deploy YB-Master processes on separate nodes, distinct from YB-TServer processes. This separation ensures resource isolation, optimizes performance, and enhances deployment flexibility, particularly beneficial for large-scale and production environments.

### Unsupported Scenarios

1. **Kubernetes Support**: Dedicated master node placement is not supported for universes deployed on Kubernetes.
2. **Post-Deployment Conversion**: Conversion of existing universes between shared and dedicated master configurations is not supported.
3. **Mixed Deployments**: All masters within a universe must either be dedicated or shared; mixed configurations are not allowed.

![Dedicated Master Nodes Architecture](path/to/diagram.png)

### Feature Details

#### Prerequisites
- Access to YugabyteDB Anywhere with administrative privileges.
- Supported cloud provider account (AWS, GCP, Azure) or on-premises infrastructure.

#### Setup Environment
1. Navigate to the "Create Universe" section in YugabyteDB Anywhere.
2. Configure essential universe settings: name, replication factor, and cloud provider.
3. Under the "Master Placement" section, choose "Place Masters on dedicated nodes (Dedicated Masters)".

#### Example
Creating a universe with dedicated master nodes using ysqlsh:

```sql
-- Example using ysqlsh: Creating a new universe with dedicated master nodes
CREATE UNIVERSE my_universe WITH (
    replication_factor = 3,
    master_placement = 'dedicated'
);
```

### Additional Configuration

| GFlag                          | Details                                                                 |
|--------------------------------|-------------------------------------------------------------------------|
| example_ysql_max_connections   | Defines the maximum number of concurrent YSQL connections per instance. |
| --another_config_setting       | Activates enhanced logging for dedicated master nodes when enabled.     |

### Metrics

| Metric Name          | Details                                                                                             |
|----------------------|-----------------------------------------------------------------------------------------------------|
| feature_usage_count  | Increments each time a universe with dedicated master nodes is created or utilized within a session. |

### Architecture

The dedicated master nodes feature introduces a configuration allowing YB-Master processes to run on separate nodes, leveraging optimized resource allocation for enhanced operational stability. This architecture is particularly suited for high-throughput environments requiring minimal latency in metadata operations.

### Best Practices

- **Optimal Resource Allocation**: Allocate at least 4GB of RAM to each YB-Master node for optimal performance.
- **Monitoring Strategy**: Set up alerts for spikes in `feature_usage_count` to track utilization and detect potential issues.

### Related Articles

- [Azure with YugabyteDB: A Comprehensive Deployment Guide](https://docs.yugabyte.com/latest/deploy/azure/)
- [Blog Post: Diving Deep into Our New Feature's Performance](https://blog.yugabyte.com/new-feature-performance)
- [YugabyteDB Fridays Tech Talk: Understanding New Feature X](https://www.youtube.com/watch?v=YFTT12345)

```