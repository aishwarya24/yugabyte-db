```markdown

## Dedicated Master Nodes

Availability
GA - Generally Available

Type
New Feature

Location in Docs Site
Under Deployment Configurations

Applicable Releases/Backports
2.20, 2.22

Related Issues
DB-4501, DB-4502

IDEA
IDEA-678

### Introduction
The "Dedicated Master Nodes" feature in YugabyteDB Anywhere allows database administrators to deploy YB-Master processes on separate, dedicated nodes. This design ensures resource isolation and enhances performance by preventing resource contention between YB-Master and YB-TServer processes. This feature is particularly beneficial for large or heavily utilized database deployments where optimal performance and stability of master services are critical.

### Unsupported Scenarios

1. **Kubernetes Support:** Currently, the feature does not support deployments on Kubernetes. This limitation means that users deploying YugabyteDB universes via Kubernetes cannot leverage dedicated master nodes.

2. **Post-Deployment Conversion:** Once a universe is created, it cannot be converted from shared to dedicated master nodes or vice-versa. This feature is applicable only during the initial universe creation process.

3. **Mixed Deployments:** Deploying a combination of dedicated and shared master nodes within the same universe is not supported.

### Feature Details

#### Prerequisites
- Ensure that your cloud provider (AWS, GCP, Azure, or On-Premises) is configured correctly in YugabyteDB Anywhere.
- Decide on the replication factor `N` for your universe, as this will determine the number of dedicated master nodes.

#### Setup Environment

1. **Universe Creation:**
   - Navigate to the "Create Universe" section in YugabyteDB Anywhere.
   - Configure the basic universe details, including name, replication factor, and cloud provider.

2. **Master Placement:**
   - In the "Master Placement" section, select "Place Masters on dedicated nodes (Dedicated Masters)".
   - Proceed with the universe creation, and YugabyteDB Anywhere will provision `N` dedicated nodes for the YB-Master processes.

#### Example

Below is an example scenario illustrating how to create a universe with dedicated master nodes.

1. **Using YugabyteDB Anywhere Interface:**
   - Navigate to the "Create Universe" page.
   - Set the universe name and select a replication factor.
   - Choose your cloud provider (e.g., AWS).
   - Under "Master Placement", choose "Place Masters on dedicated nodes (Dedicated Masters)".
   - Complete the universe creation process.

### Additional Configuration

**GFlag** | **Details**
---|---
`yb_master_use_dedicated_nodes` | Determines if YB-Master processes should be placed on dedicated nodes. Default is `false`.

### Metrics

**Metric Name** | **Details**
---|---
`dedicated_master_node_usage` | Tracks the utilization of dedicated master nodes across all universes.

### Architecture

The feature operates by provisioning dedicated nodes exclusively for YB-Master processes. This setup enhances performance by isolating critical metadata operations from data-serving tasks. The dedicated nodes leverage independent CPU and memory resources, ensuring high availability and reduced latency for master operations.

### Best Practices

- **Resource Allocation:** Allocate sufficient resources (e.g., CPU, memory) to dedicated master nodes to ensure optimal performance.
- **Monitoring:** Set up monitoring for `dedicated_master_node_usage` to track and optimize resource utilization.
- **Testing:** Before deploying in production, validate the configuration in a staging environment to ensure compatibility and performance.

### Related Articles

- [Azure with YugabyteDB: A Comprehensive Deployment Guide](https://docs.yugabyte.com/latest/deploy/public-clouds/azure/)
- [Blog Post: Diving Deep into Our New Feature's Performance](https://blog.yugabyte.com)
- [YugabyteDB Fridays Tech Talk (YFTT): Understanding New Feature X](https://www.youtube.com/yugabyte)
```
