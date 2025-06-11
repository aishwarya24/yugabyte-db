```markdown

## Dedicated Master Nodes

**Availability**
GA - Generally Available

**Type**
New Feature

**Location in Docs Site**
Under Deployment Options

**Applicable Releases/Backports**
2.18, 2.20

**Related Issues**
N/A

**IDEA**
N/A

### Introduction
The "Dedicated Master Nodes" feature in YugabyteDB Anywhere enables the deployment of YB-Master processes on dedicated nodes, separate from YB-TServer nodes. This enhances resource isolation, optimizes performance, and provides deployment flexibility for large or heavily utilized environments. By isolating YB-Master processes, this feature minimizes resource contention and improves stability and performance in production environments.

### Unsupported Scenarios

1. **Kubernetes Support**: The feature does not support Kubernetes deployments. Master node placement on dedicated nodes is currently only available for cloud and on-premises configurations.

2. **Post-Deployment Conversion**: Existing universes cannot be converted from shared to dedicated master nodes or vice versa. The feature is only applicable during the creation of new universes.

3. **Mixed Deployments**: Deploying some masters on dedicated nodes and others on shared nodes within the same universe is not supported.

### Feature Details

#### Prerequisites
- Ensure that the chosen cloud provider (AWS, GCP, Azure) or on-premises setup supports separate node provisioning.
- The universe's replication factor (RF) must be configured to match the number of dedicated master nodes.

#### Setup Environment
1. Navigate to the "Create Universe" section in YugabyteDB Anywhere.
2. Enter the basic universe details, including name, replication factor, and cloud provider.

#### Universe Creation
- Under the "Master Placement" section, select "Place Masters on dedicated nodes (Dedicated Masters)".
- Upon completion, the system provisions distinct VM instances for the YB-Masters.

#### Example

To create a universe with dedicated master nodes:

1. Open the YugabyteDB Anywhere console.
2. Select "Create Universe".
3. Configure universe details and choose "Place Masters on dedicated nodes (Dedicated Masters)".
4. Complete the universe creation process to provision dedicated nodes for YB-Masters.

### Additional Configuration

| GFlag                            | Details                                                                 |
|----------------------------------|-------------------------------------------------------------------------|
| `--dedicated_master_nodes=true`  | Configures the universe to use dedicated nodes for YB-Master processes. |

### Metrics

| Metric Name                | Details                                                                                   |
|----------------------------|-------------------------------------------------------------------------------------------|
| `dedicated_master_usage`   | Tracks the usage count of the dedicated master feature in universe deployments.           |

### Best Practices

- **Optimal Resource Allocation**: Allocate sufficient resources (CPU, memory) to dedicated master nodes to ensure optimal performance.
- **Monitoring Strategy**: Set up monitoring alerts for master node resource usage to preemptively address potential performance bottlenecks.

### Related Articles

- [Azure with YugabyteDB: A Comprehensive Deployment Guide](https://docs.yugabyte.com/latest/deploy/azure/)
- [Blog Post: Diving Deep into Our New Feature's Performance](https://blog.yugabyte.com/new-feature-performance/)
- [YugabyteDB Fridays Tech Talk (YFTT): Understanding New Feature X](https://www.youtube.com/watch?v=yugabyte-tech-talk)

```