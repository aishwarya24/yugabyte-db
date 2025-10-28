---
title: "Get started with AI"
headerTitle: "Get started with AI"
linkTitle: "Get started"
description: "Learn how to build AI applications with YugabyteDB"
headcontent: "Learn how to build AI applications with YugabyteDB"
type: docs
---

# Get started with AI

Before you start building AI applications with YugabyteDB, make sure you have the following prerequisites:

- A YugabyteDB cluster running v2.25.1 or later
- Access to an AI platform (OpenAI, Azure AI, or Google Vertex AI)
- Basic knowledge of SQL and vector operations

## Build your first RAG application

You'll learn how to build a Retrieval-Augmented Generation (RAG) pipeline using YugabyteDB and OpenAI.

### Prerequisites

- [Docker](https://www.docker.com) 20 or later
- [Docker Compose](https://docs.docker.com/compose/install/) 1.29 or later
- An OpenAI API key

### Deploy YugabyteDB with pgvector

First, create a Docker Compose file:

```yaml
version: '3.8'
services:
  yugabyte:
    image: yugabytedb/yugabyte:2.25.1.0-b175
    command: ["bin/yugabyted", "start", "--advertise_address=0.0.0.0"]
    ports:
      - "5433:5433"
      - "9000:9000"
    environment:
      - YB_MASTER_ADDRESSES=yugabyte:7100
```

Start the cluster:

```bash
$ docker-compose up -d
```

### Enable the pgvector extension

Connect to your cluster and enable the pgvector extension:

```plpgsql
ysqlsh> CREATE EXTENSION vector;
```

### Create a vector table

Create a table to store your embeddings:

```plpgsql
ysqlsh> CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    content TEXT,
    embedding vector(1536)
);
```

## Next steps

Now that you've set up your basic RAG infrastructure, you can:

- [Build a complete RAG application](/preview/ai/tutorials/rag-applications/hello-rag/)
- [Learn about vector search](/preview/ai/vector-search/)
- [Explore AI applications](/preview/ai/applications/)
- [Build an AI movie recommendation service](/preview/ai/tutorials/ai-movie-recommendations/)
