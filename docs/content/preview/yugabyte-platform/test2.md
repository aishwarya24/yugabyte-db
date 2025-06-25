```markdown
---
title: "Dedicated Master Nodes in YugabyteDB Anywhere"
linkTitle: "Dedicated Master Nodes"
description: "Learn how to deploy YB-Master processes on dedicated nodes in YugabyteDB Anywhere for improved resource isolation and performance."
headerTitle: "Dedicated Master Nodes in YugabyteDB Anywhere"
menu:
  preview:
    parent: "features"
    identifier: "dedicated-master-nodes"
    weight: 100
type: "docs/index"
---

# Dedicated Master Nodes in YugabyteDB Anywhere

## Overview

**PURPOSE:** This feature allows the deployment of YB-Master processes on dedicated nodes within YugabyteDB Anywhere, enhancing resource isolation and performance.

* **Problem Solved:** Resource contention between YB-Master and YB-TServer processes on shared nodes can degrade performance.
* **Solution Offered:** Deploy YB-Master processes on separate, dedicated nodes to isolate resources and optimize performance.
* **Key Benefits:** Improved stability, enhanced performance, and increased deployment flexibility for critical production environments.
* **Target Audience:** Database Administrators, DevOps Engineers, Platform Engineers.
* **High-Level Functionality:** 
  - Option to place YB-Masters on dedicated nodes during universe creation.
  - Automatic provisioning of dedicated nodes matching the replication factor.
  - Support for multiple cloud providers and on-premises deployments.

## Concepts

* **Dedicated Master Nodes:** Nodes exclusively running YB-Master processes, separate from YB-TServer nodes, to prevent resource contention.
* **Resource Isolation:** Ensures that YB-Master processes have dedicated CPU, memory, and disk I/O resources.
* **Architectural Overview:** This feature modifies the deployment architecture by separating YB-Master and YB-TServer processes onto different nodes, enhancing the stability and performance of the YB-Master component.

## Prerequisites

* **YugabyteDB Version:** 2.19.0 or later.
* **Required Components/Services:** Cloud provider accounts (AWS, GCP, Azure) or on-premises infrastructure.
* **Existing Configurations:** None specific, but ensure network access for node communication.
* **Tools:** `yb-admin` for cluster management.
* **Access/Permissions:** Administrator access to YugabyteDB Anywhere and cloud provider resources.

## Usage Guide

### Step 1: Enabling the Feature

To enable dedicated master nodes during universe creation in YugabyteDB Anywhere, follow these steps:

1. Navigate to the "Create Universe" section in YugabyteDB Anywhere.
2. Configure the basic universe details, including name, replication factor, and cloud provider.
3. In the "Master Placement" section, select "Place Masters on dedicated nodes (Dedicated Masters)".

### Step 2: Configuration

No additional configuration is required beyond selecting the dedicated master option during universe creation.

### Step 3: Interacting with the Feature

Once the universe is created with dedicated master nodes, you can manage and monitor the nodes using standard YugabyteDB tools and interfaces.

```sh
# Example: Checking the status of master nodes
yb-admin --master_addresses <master_ip_list> list_all_masters
```

### Examples

Example 1: Basic Feature Workflow

1. Create a universe with dedicated master nodes:

    ```sh
    # In YugabyteDB Anywhere UI, select "Place Masters on dedicated nodes" during universe creation.
    ```

2. Verify the deployment:

    ```sh
    yb-admin --master_addresses <master_ip_list> list_all_masters
    ```

    Expected Output:

    ```output
    Master UUID | RPC Address | State
    ------------|-------------|------
    <uuid>      | <ip:port>   | ALIVE
    ```

### Best Practices

* **Resource Allocation:** Ensure that dedicated master nodes have sufficient CPU and memory resources to handle metadata operations efficiently.
* **Monitoring:** Regularly monitor the performance of master nodes to preemptively address any resource bottlenecks.

### Limitations

* **Kubernetes Support:** Not supported for Kubernetes deployments.
* **Post-Deployment Conversion:** Cannot convert existing shared-master universes to dedicated-master universes.
* **Mixed Deployments:** All masters must be either dedicated or shared within a universe.

### Troubleshooting

Problem: Dedicated master nodes are not provisioning as expected.

Diagnosis: Check the universe creation logs for errors related to node provisioning.

Solution: Verify cloud provider credentials and network configurations.

### Related Information

[Link to YugabyteDB Concept: Universe Management](https://docs.yugabyte.com/latest/manage/universes/)
[Link to YugabyteDB How-to Guide: Creating a Universe](https://docs.yugabyte.com/latest/manage/create-universe/)
[YugabyteDB Blog Post: Optimizing YB-Master Performance](https://www.yugabyte.com/blog/optimizing-yb-master-performance/)
```
