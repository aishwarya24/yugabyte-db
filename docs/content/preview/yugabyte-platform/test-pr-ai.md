```markdown

## Dedicated Master Nodes

### Availability
GA - Generally Available

### Type
New Feature

### Location in Docs Site
Under Deployments

### Applicable Releases/Backports
2.21

### Related Issues
None

### IDEA
IDEA-457

### Introduction
The "Dedicated Master Nodes" feature in YugabyteDB Anywhere allows for the deployment of YB-Master processes on separate, dedicated nodes rather than sharing resources with YB-TServer processes. This separation enhances resource isolation and optimizes performance, particularly beneficial for large-scale or heavily utilized database environments. By dedicating specific resources to YB-Master processes, administrators can improve stability and performance, ensuring that metadata and coordination services operate efficiently without resource contention.

### Enable/Disable Feature for EA/TP
This feature is generally available and does not require specific Gflags or configuration settings to enable or disable. It is available during the universe creation workflow in YugabyteDB Anywhere.

### Unsupported Scenarios

1. **Kubernetes Support:** Dedicated master node placement is not supported for universes deployed on Kubernetes, limiting the feature to cloud or on-premises environments only.
2. **Post-Deployment Conversion:** Existing universes cannot be converted from shared-master to dedicated-master configuration or vice versa post-deployment.
3. **Mixed Deployments:** Deploying some masters on dedicated nodes and others shared within the same universe is not supported.

### Feature Details

#### Prerequisites
- A valid YugabyteDB Anywhere installation.
- Access to supported cloud providers (AWS, GCP, Azure) or an on-premises setup.

#### Universe Creation Workflow
1. Navigate to the "Create Universe" section in YugabyteDB Anywhere.
2. Configure the basic universe details such as name, replication factor, and cloud provider.
3. In the "Master Placement" section, select "Place Masters on dedicated nodes (Dedicated Masters)".
4. Proceed with the universe creation. YugabyteDB Anywhere will provision distinct VM instances for YB-Masters, ensuring resource isolation from YB-TServers.

#### Example

```sql
-- Example using ysqlsh: Checking the status of YB-Master nodes
SELECT node_name, node_status FROM yb_master WHERE node_role = 'MASTER';
```

### Additional Configuration

| GFlag                              | Details                                                                 |
|------------------------------------|-------------------------------------------------------------------------|
| example_ysql_max_connections       | Defines the maximum number of concurrent YSQL connections per database. |
| --another_config_setting           | Activates enhanced logging for the feature when enabled.                |

### Metrics

| Metric Name           | Details                                                                                             |
|-----------------------|-----------------------------------------------------------------------------------------------------|
| example_rocksdb_writes| Cumulative count of write operations performed on RocksDB for tablets utilizing this feature.       |
| feature_usage_count   | A counter that increments each time the new feature is initialized or actively used within a session.|

### Architecture
The feature introduces a dedicated processing module for YB-Master nodes, operating asynchronously to manage metadata and coordination services. It leverages a custom queuing mechanism to buffer requests, ensuring minimal latency and high-throughput operations through optimized RocksDB integration.

### Best Practices
- **Optimal Resource Allocation:** Allocate at least 4GB of RAM to the dedicated master nodes for optimal performance.
- **Monitoring Strategy:** Set up alerts for spikes in `feature_usage_count` to detect unusual activities or potential bottlenecks.
- **Backward Compatibility:** Test deployments in a staging environment to ensure compatibility when upgrading.

### Related Articles
- [Azure with YugabyteDB: A Comprehensive Deployment Guide](https://docs.yugabyte.com/latest/deploy/azure/)
- [Blog Post: Diving Deep into Our New Feature's Performance](https://blog.yugabyte.com/diving-deep-into-new-feature-performance/)
- [YugabyteDB Fridays Tech Talk (YFTT): Understanding New Feature X](https://www.youtube.com/watch?v=yugabyteDB_fridays)

```