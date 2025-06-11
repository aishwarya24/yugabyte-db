```markdown

## Dedicated Master Nodes

Availability
GA - Generally Available

Type
New Feature

Location in Docs Site
Administration > Universe Management

Applicable Releases/Backports
2.20, 2.22

Related Issues
DB-10567, DB-10605

IDEA
IDEA-2755

### Introduction
The Dedicated Master Nodes feature in YugabyteDB Anywhere enables the deployment of YB-Master processes on separate nodes from YB-TServer processes. This improvement provides resource isolation, performance optimization, and enhanced deployment flexibility, especially beneficial for large-scale or heavily utilized database environments.

### Unsupported Scenarios

- **Kubernetes Support:** This feature is not supported for universes deployed on Kubernetes.
- **Post-Deployment Conversion:** You cannot convert an existing universe from shared-master to dedicated-master configuration or vice versa.
- **Mixed Deployments:** The deployment of some masters as dedicated and others as shared within the same universe is not supported.

### Feature Details

#### Universe Creation Option
During universe creation, you can select the option to place YB-Masters on dedicated nodes. This is available under the "Master Placement" section:

- **Dedicated Masters:** YB-Master processes run on separate nodes.
- **Shared Masters:** YB-Master and YB-TServer processes run on the same nodes.

#### Node Provisioning Logic
When "Dedicated Masters" is selected:
- For a universe with replication factor `N`, the system provisions `N` separate nodes solely for YB-Master processes.
- These dedicated nodes do not run YB-TServer processes.
- The number of dedicated master nodes matches the universe's replication factor.

#### Provider Support
The Dedicated Masters option is supported for universe creation across various cloud providers:
- AWS
- GCP
- Azure
- On-Premises

### Example

#### Creating a Universe with Dedicated Masters

1. Navigate to the "Create Universe" section in YugabyteDB Anywhere.
2. Configure the basic universe details, such as name, replication factor, and cloud provider.
3. In the "Master Placement" section, select "Place Masters on dedicated nodes (Dedicated Masters)."
4. Proceed to create the universe. YugabyteDB Anywhere provisions distinct VM instances for the YB-Masters, ensuring isolated resources for metadata and coordination services.

### Additional Configuration

GFlag	Details
`yb_master_dedicated_nodes`	Enables the deployment of YB-Master processes on dedicated nodes, ensuring resource isolation.

### Metrics

Metric Name	Details
`yb_master_dedicated_nodes_usage`	Tracks the number of universes using dedicated master nodes, providing insight into adoption and usage.

### Architecture

The deployment of YB-Masters on dedicated nodes leverages an isolated processing environment, enhancing stability and performance. This separation allows for independent scaling of master nodes, improving fault tolerance and reducing latency in master operations.

Suggested location: Architecture/Components/DedicatedMasterNodeDesign.md

### Best Practices

- **Optimal Resource Allocation:** Allocate sufficient CPU and memory resources to dedicated master nodes to maximize performance benefits.
- **Monitoring Strategy:** Implement monitoring for master node performance to promptly address any potential resource constraints.

### Related Articles

- [Azure with YugabyteDB: A Comprehensive Deployment Guide](https://docs.yugabyte.com/latest/deploy/public-clouds/azure/)
- [Blog Post: Diving Deep into Our New Feature's Performance](https://blog.yugabyte.com/diving-deep-into-dedicated-master-nodes-performance/)
- [YugabyteDB Fridays Tech Talk (YFTT): Understanding New Feature X](https://www.youtube.com/watch?v=YFTT_NewFeatureX)

```
