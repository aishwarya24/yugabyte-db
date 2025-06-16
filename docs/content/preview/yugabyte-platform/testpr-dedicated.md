```markdown

## Dedicated Master Nodes

### Availability
GA - Generally Available

### Type
New Feature

### Location in Docs Site
Under Deployment Configurations

### Applicable Releases/Backports
Version 2.22 and later

### Related Issues
None

### IDEA
None

### Introduction
The "Dedicated Master Nodes" feature in YugabyteDB Anywhere enables the deployment of YB-Master processes on dedicated nodes, separate from YB-TServer processes. This separation allows for better resource isolation, improved performance, and greater deployment flexibility. A typical use case involves optimizing performance and stability in large or heavily utilized universes by dedicating specific resources to YB-Master processes.

### Unsupported Scenarios

1. **Kubernetes Support**: Placement of dedicated master nodes is not supported for universes deployed on Kubernetes.
2. **Post-Deployment Conversion**: Existing universes cannot be converted from shared to dedicated master nodes, or vice-versa.
3. **Mixed Deployments**: Mixed configurations where some masters are dedicated and others are shared within the same universe are not supported.

### Feature Details

#### Prerequisites
- YugabyteDB Anywhere version 2.22 or later.
- An accessible cloud provider account (AWS, GCP, Azure) or an on-premises setup.

#### Setup Environment
To configure dedicated master nodes:

1. Navigate to the "Create Universe" section in YugabyteDB Anywhere.
2. Enter basic universe details such as name, replication factor, and cloud provider.
3. In the "Master Placement" section, select "Place Masters on dedicated nodes (Dedicated Masters)".

#### Deployment

- **Node Provisioning**: When selecting "Dedicated Masters", YugabyteDB Anywhere will provision `N` separate nodes for YB-Master processes, where `N` corresponds to the replication factor of the universe. These nodes will not run YB-TServer processes.

#### Example

**Creating a Universe with Dedicated Master Nodes:**

1. Navigate to "Create Universe".
2. Fill in universe details:
   - Name: `example_universe`
   - Replication Factor: `3`
   - Cloud Provider: `AWS`
3. Select "Place Masters on dedicated nodes (Dedicated Masters)".
4. Complete the universe creation process.

### Additional Configuration

| GFlag | Details |
|-------|---------|
| --yb_num_masters | Sets the number of YB-Master nodes. Corresponds to the replication factor. |

### Metrics

| Metric Name | Details |
|-------------|---------|
| master_dedicated_node_utilization | Tracks resource usage on dedicated master nodes. |
| universe_creation_time | Time taken to complete the universe creation process with dedicated masters. |

### Architecture

The dedicated master nodes feature introduces a separation of concerns by isolating YB-Master processes onto their own nodes. This design minimizes resource contention and improves performance for metadata and coordination services. Implementation relies on existing cloud provider provisioning APIs to allocate and manage resources efficiently.

### Best Practices

- Allocate sufficient resources (CPU, memory) to dedicated master nodes to ensure optimal performance.
- Regularly monitor `master_dedicated_node_utilization` metrics to identify potential bottlenecks.

### Related Articles

- [Azure with YugabyteDB: A Comprehensive Deployment Guide](https://docs.yugabyte.com/latest/deploy/public-clouds/azure/)
- [Blog Post: Diving Deep into Our New Feature's Performance](https://blog.yugabyte.com/new-feature-performance/)
- [YugabyteDB Fridays Tech Talk: Understanding New Feature X](https://www.youtube.com/watch?v=example)

```
