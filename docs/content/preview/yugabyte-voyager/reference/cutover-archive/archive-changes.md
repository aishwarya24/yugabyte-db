---
title: archive changes reference
headcontent: yb-voyager archive changes
linkTitle: archive changes
description: YugabyteDB Voyager archive changes reference
menu:
  preview_yugabyte-voyager:
    identifier: voyager-archive-changes
    parent: cutover-archive
    weight: 150
type: docs
---

Archives the streaming data from the source database.

## Syntax

```text
Usage: yb-voyager archive changes [ <arguments> ... ]
```

### Arguments

The valid *arguments* for archive changes status are described in the following table:

| Argument | Description/valid options |
| :------- | :------------------------ |
| -e, --export-dir <path> | Path to the export directory. This directory is a workspace used to store exported schema DDL files, export data files, migration state, and a log file.|
| -h, --help | Command line help for archive changes. |
| --delete |  Delete exported data after moving it to the target database. (default: false) |
| --move-to <path> | Destination path to move exported data to. |
| --send-diagnostics | Send diagnostics information to Yugabyte. (default: true) |
| --verbose | Display extra information in the output. (default: false) |
| -y, --yes | Answer yes to all prompts during migration (default: false). |