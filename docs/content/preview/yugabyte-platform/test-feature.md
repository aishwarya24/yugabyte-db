```markdown

## Dedicated Master Nodes

Availability
GA - Generally Available

Type
New Feature

Location in Docs Site
Under Deployments

Applicable Releases/Backports
4.0 and later

Related Issues
None

IDEA
None

### Introduction
The "Dedicated Master Nodes" feature in YugabyteDB Anywhere allows for the deployment of YB-Master processes on dedicated nodes, separate from YB-TServer nodes. This configuration enhances resource isolation, optimizes performance, and provides deployment flexibility. It is particularly beneficial for large or heavily utilized universes where reducing resource contention is critical.

### Unsupported Scenarios

1. **Kubernetes Support:** This feature does not support dedicated master node placement for universes deployed on Kubernetes.
2. **Post-Deployment Conversion:** Existing universes with shared-master configurations cannot be converted to dedicated-master configurations and vice-versa.
3. **Mixed Deployments:** Deploying mixed configurations of dedicated and shared masters within the same universe is not supported.

### Feature Details

#### Prerequisites
- Ensure that you have a compatible cloud provider account (AWS, GCP, Azure) or on-premises setup.
- YugabyteDB Anywhere version 4.0 or later must be installed.

#### Universe Creation with Dedicated Masters

1. Navigate to the "Create Universe" section in YugabyteDB Anywhere.
2. Configure the basic universe details such as name, replication factor, and cloud provider.
3. In the "Master Placement" section, select "Place Masters on dedicated nodes (Dedicated Masters)".
4. Proceed with the universe creation. YugabyteDB Anywhere will provision distinct VM instances for YB-Masters, ensuring dedicated resources for YB-Master processes.

### Example

Bash

```bash
# Example command to create a universe with dedicated masters via CLI
yb-anywhere create-universe \
  --name my_universe \
  --replication-factor 3 \
  --cloud-provider aws \
  --dedicated-masters true
```

### Additional Configuration

GFlag	Details
--yb_enable_dedicated_masters	Enable or disable deployment of dedicated master nodes. Default is false.

### Metrics

Metric Name	Details
master_dedicated_count	Tracks the number of dedicated master nodes provisioned during universe creation.
master_resource_utilization	Monitors the CPU and memory usage of dedicated master nodes.

### Architecture
The architecture of dedicated master nodes involves the separation of YB-Master processes from YB-TServers onto distinct nodes. This isolation ensures that YB-Masters have dedicated resources, thus enhancing performance and stability. The feature supports scalability by allowing independent scaling of master and T-Server nodes.

Suggested location: Architecture/Components/DedicatedMasterNodesDesign.md

### Best Practices

- **Optimal Resource Allocation:** Allocate sufficient CPU and memory resources to dedicated master nodes to ensure optimal performance.
- **Monitoring:** Set up monitoring for master_resource_utilization to proactively manage resource allocation and detect potential issues.
- **Testing:** Test the configuration in a non-production environment before deployment to production.

### Related Articles

- [Azure with YugabyteDB: A Comprehensive Deployment Guide](https://docs.yugabyte.com/latest/deploy/public-clouds/azure/)
- [Blog Post: Diving Deep into Our New Feature's Performance](https://blog.yugabyte.com/diving-deep-into-dedicated-master-nodes-performance/)
- [YugabyteDB Fridays Tech Talk (YFTT): Understanding New Feature X](https://www.yugabyte.com/resources/yugabytedb-fridays-tech-talk/)

```