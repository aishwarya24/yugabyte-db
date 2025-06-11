```markdown

## Dedicated Master Nodes

**Availability**  
GA - Generally Available

**Type**  
New Feature

**Location in Docs Site**  
Under Deployments

**Applicable Releases/Backports**  
Version 2.20 and later

**Related Issues**  
None

**IDEA**  
None

### Introduction

The "Dedicated Master Nodes" feature in YugabyteDB Anywhere allows administrators to deploy YB-Master processes on dedicated nodes separate from YB-TServer nodes. This separation enhances resource isolation, optimizes performance, and offers greater deployment flexibility, particularly for large-scale or resource-intensive environments. By dedicating specific resources such as CPU, memory, and disk I/O to YB-Master processes, the feature ensures improved stability and performance.

### Unsupported Scenarios

1. **Kubernetes Support:** This feature does not support universes deployed on Kubernetes.
2. **Post-Deployment Conversion:** Existing universes cannot be converted between shared and dedicated master configurations post-deployment.
3. **Mixed Deployments:** It is not possible to have a mix of dedicated and shared masters within the same universe.

### Feature Details

#### Prerequisites
- A running YugabyteDB instance with access to YugabyteDB Anywhere.
- Administrator privileges to create and manage universes.

#### Universe Creation with Dedicated Masters
1. Navigate to the "Create Universe" section in YugabyteDB Anywhere.
2. Configure the basic universe details, such as the name, replication factor, and cloud provider.
3. In the "Master Placement" section, select "Place Masters on dedicated nodes (Dedicated Masters)".
4. Complete the remaining setup options and create the universe.

#### Provider Support
This feature is available for the following cloud provider configurations:
- AWS
- GCP
- Azure
- On-Premises

### Example

#### Creating a Universe with Dedicated Masters

To create a universe where YB-Master processes run on dedicated nodes, follow these steps:

1. In YugabyteDB Anywhere, start by creating a new universe.
2. Select the desired replication factor and cloud provider.
3. Choose "Dedicated Masters" under the Master Placement options.
4. Continue with the universe creation process.

### Additional Configuration

**GFlag**  
**Details**  
`example_ysql_max_connections`  
Defines the maximum number of concurrent YSQL connections allowed per database instance.

### Metrics

**Metric Name**  
**Details**  
`feature_usage_count`  
A counter that increments each time the feature is initialized or actively used within a session.

### Architecture

The "Dedicated Master Nodes" feature introduces a change in the deployment architecture by separating YB-Master processes onto distinct nodes. This separation minimizes resource contention and enhances the fault tolerance of the cluster by isolating critical coordination services.

### Best Practices

- **Optimal Resource Allocation:** Allocate a minimum of 4GB of RAM per dedicated master node for optimal performance.
- **Monitoring Strategy:** Set up alerts for the `feature_usage_count` metric to identify unusual activity or potential issues.

### Related Articles

- [Azure with YugabyteDB: A Comprehensive Deployment Guide](https://docs.yugabyte.com/latest/deploy/deploy-cloud/cloud-azure/)
- [Blog Post: Diving Deep into Our New Feature's Performance](https://blog.yugabyte.com/diving-deep-into-new-feature-performance)
- [YugabyteDB Fridays Tech Talk (YFTT): Understanding New Feature X](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

```
