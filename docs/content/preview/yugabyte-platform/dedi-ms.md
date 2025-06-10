```markdown
## Dedicated Master Nodes

Availability  
GA - Generally Available

Type  
New Feature

Location in Docs Site  
Deployment Guides

Applicable Releases/Backports  
2.20, 2.21

Related Issues  
N/A

IDEA  
N/A

### Introduction
The "Dedicated Master Nodes" feature in YugabyteDB Anywhere enhances resource management by allowing YB-Master processes to be deployed on dedicated nodes separate from YB-TServer processes. This separation provides resource isolation, optimizes performance, and offers deployment flexibility, particularly beneficial for large-scale or heavily utilized databases.

### Enable/Disable Feature for EA/TP
N/A

### Unsupported Scenarios

1. **Kubernetes Support**: The placement of dedicated master nodes is not supported for universes deployed on Kubernetes.

2. **Post-Deployment Conversion**: Existing universes cannot be converted from shared-master to dedicated-master configurations or vice versa.

3. **Mixed Deployments**: Universes cannot have a mix of dedicated and shared masters.

### Feature Details

#### Prerequisites
- Access to YugabyteDB Anywhere with appropriate administrative privileges.
- Ensure your cloud provider (AWS, GCP, Azure) or on-premises setup supports the deployment of additional nodes.

#### Setup Environment

1. Navigate to the "Create Universe" section in YugabyteDB Anywhere.
2. Configure basic universe details such as name, replication factor, and cloud provider.
3. In the "Master Placement" section, select "Place Masters on dedicated nodes (Dedicated Masters)".

#### Connect to the Database
To connect to the database using ysqlsh:

```bash
ysqlsh -h <your_db_host> -p 5433 -U <your_username> -d <your_database>
```

If you're using ycqlsh:

```bash
ycqlsh <your_db_host> 9042
```

#### Example

SQL

```sql
-- Example: Creating a table with dedicated masters
CREATE TABLE example_data (
    id INT PRIMARY KEY,
    value TEXT
);
```

### Additional Configuration

| GFlag                          | Details                                                                                     |
|--------------------------------|---------------------------------------------------------------------------------------------|
| `example_ysql_max_connections` | Defines the maximum number of concurrent YSQL connections allowed per database instance.     |
| `--another_config_setting`     | A boolean setting that, when enabled, activates enhanced logging for this feature.          |

### Metrics

| Metric Name            | Details                                                                                   |
|------------------------|-------------------------------------------------------------------------------------------|
| `example_rocksdb_writes` | Cumulative count of write operations performed on RocksDB for tablets utilizing this feature. |
| `feature_usage_count`  | A counter that increments each time the new feature is initialized or actively used within a session. |

### Architecture

The dedicated master nodes feature introduces a distinct processing module that isolates YB-Master operations from YB-TServers. This module is designed to handle high-throughput requests with minimal latency, leveraging optimized resource allocation and a custom queuing mechanism.

### Best Practices

- **Optimal Resource Allocation**: Allocate at least 4GB of RAM to each dedicated master node for optimal performance.
- **Monitoring Strategy**: Implement alerts for `feature_usage_count` spikes to detect unusual activity or potential bottlenecks.
- **Backward Compatibility**: Test against a staging environment before upgrading to ensure compatibility with existing applications.

### Related Articles

- [Azure with YugabyteDB: A Comprehensive Deployment Guide](https://docs.yugabyte.com/latest/deploy/azure/)
- [Blog Post: Diving Deep into Our New Feature's Performance](https://blog.yugabyte.com/new-feature-performance/)
- [YugabyteDB Fridays Tech Talk (YFTT): Understanding New Feature X](https://www.youtube.com/yugabytedbfridays)
```
