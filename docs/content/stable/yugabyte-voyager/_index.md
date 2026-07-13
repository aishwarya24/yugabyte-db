---
title: Migrate to YugabyteDB using Voyager
headerTitle: YugabyteDB Voyager
linkTitle: YugabyteDB Voyager
headcontent: Simplify migration from legacy and cloud databases to YugabyteDB
cascade:
  unversioned: true
description: YugabyteDB Voyager is a powerful open-source data migration engine that helps you migrate your database to YugabyteDB quickly and securely.
type: indexpage
aliases:
  - /stable/voyager/
  - /stable/tools/voyager/
  - /stable/yugabyte-voyager/overview/
menu:
  stable_yugabyte-voyager:
    name: "Overview"
    identifier: yugabyte-voyager
    parent: yugabytedb-voyager
    weight: 99
breadcrumbDisable: true
---

Use YugabyteDB Voyager to manage end-to-end database migration, including cluster preparation, schema migration, and data migration. Voyager supports offline and live migration from PostgreSQL to YugabyteDB Aeon, YugabyteDB Anywhere, and the core open source database, YugabyteDB. Offline migration from MySQL and Oracle was deprecated on July 13, 2026, and will no longer be supported after October 13, 2026. Contact {{% support-general %}} for guidance on migration options.

{{< sections/text-with-right-image
  title="Get Started"
  description="Install YugabyteDB Voyager on different operating systems (RHEL, Ubuntu, macOS), or via environments such as Docker or an Airgapped installation."
  imageTransparent=true
  buttonText="Install"
  buttonUrl="install-yb-voyager/"
  imageTransparent=true
  imageAlt="YugabyteDB Voyager" imageUrl="/images/homepage/voyager-transparent.svg"
>}}

{{< sections/3-boxes >}}
  {{< sections/3-box-card
    title="Learn how it works"
    description="Learn about features, source and target databases, and the migration workflow."
    buttonText="Introduction"
    buttonUrl="introduction/"
  >}}

  {{< sections/3-box-card
    title="Migrate your data"
    description="Migrate your database and verify the results."
    buttonText="migrate"
    buttonUrl="migrate/"
  >}}

  {{< sections/3-box-card
    title="Tune performance"
    description="Tune parameters to make migration jobs run faster."
    buttonText="performance"
    buttonUrl="reference/performance/"
  >}}
{{< /sections/3-boxes >}}
