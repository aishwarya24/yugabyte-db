```markdown

## Dedicated Master Nodes

Availability
GA - Generally Available

Type
New Feature

Location in Docs Site
Under Administration/Deployment

Applicable Releases/Backports
4.0, 4.1

Related Issues
None

IDEA
IDEA-562

### Introduction
The "Dedicated Master Nodes" feature in YugabyteDB Anywhere enhances resource isolation and performance by allowing YB-Master processes to run on separate, dedicated nodes. This separation prevents resource contention with YB-TServer processes, optimizing the stability and performance of YB-Master, especially crucial in large-scale deployments.

### Unsupported Scenarios

* **Kubernetes Support:** This feature does not support Kubernetes deployments. YB-Master processes cannot be dedicated to separate nodes in Kubernetes environments.
* **Post-Deployment Conversion:** It is not possible to convert an existing universe with shared masters to a dedicated-master setup after deployment.
* **Mixed Deployments:** Deploying a mix of dedicated and shared masters within a single universe is not supported.

### Feature Details

#### Universe Creation Option

When creating a universe in YugabyteDB Anywhere, you can opt to place YB-Master processes on dedicated nodes. This option appears in the "Master Placement" section of the universe creation workflow. 

#### Node Provisioning Logic

- Upon selecting "Dedicated Masters," the system provisions a number of separate nodes equal to the universe's replication factor (RF) solely for YB-Master processes.
- These dedicated master nodes do not run YB-TServer processes, ensuring complete resource isolation.

#### Provider Support

The "Dedicated Masters" option is available across various cloud provider configurations:
- AWS
- GCP
- Azure
- On-Premises

### Example

To create a universe with dedicated master nodes using the YugabyteDB Anywhere UI:

1. Navigate to the "Create Universe" section.
2. Enter basic universe details such as name and replication factor.
3. Select the desired cloud provider and configure additional settings.
4. In the "Master Placement" section, choose "Place Masters on dedicated nodes (Dedicated Masters)."
5. Complete the universe creation process to have YB-Masters deployed on separate nodes.

### Additional Configuration

| GFlag                  | Details                                                                 |
|------------------------|-------------------------------------------------------------------------|
| `yb_master_flags`      | Custom flags for configuring YB-Master processes on dedicated nodes.    |

### Metrics

| Metric Name            | Details                                                                              |
|------------------------|--------------------------------------------------------------------------------------|
| `yb_master_latency`    | Measures the latency of YB-Master operations, expected to decrease with this feature.|
| `dedicated_master_nodes_count` | Counts the number of dedicated master nodes provisioned in the universe.     |

### Best Practices

- **Optimal Resource Allocation:** Allocate sufficient resources (CPU, memory) to dedicated master nodes to leverage full performance benefits.
- **Monitoring Strategy:** Implement monitoring for `yb_master_latency` to ensure performance improvements are realized.

### Related Articles

- [Azure with YugabyteDB: A Comprehensive Deployment Guide](https://docs.yugabyte.com/latest/deploy/azure/)
- [Blog Post: Diving Deep into Our New Feature's Performance](https://blog.yugabyte.com/new-feature-performance/)
- [YugabyteDB Fridays Tech Talk (YFTT): Understanding New Feature X](https://youtube.com/yugabyteDBFridays)

```