---
title: "Vector search for AI applications"
headerTitle: "Vector search for AI applications"
linkTitle: "Vector search"
description: "Learn how to use vector search for AI applications with YugabyteDB"
headcontent: "Learn how to use vector search for AI applications with YugabyteDB"
type: docs
---

# Vector search for AI applications

Vector search is essential for building AI applications with YugabyteDB. It enables similarity search, which is the foundation of Retrieval-Augmented Generation (RAG) applications.

## What is vector search?

Vector search allows you to find similar data points in high-dimensional space. In AI applications, this typically means:

- Finding similar text based on semantic meaning
- Matching user queries to relevant content
- Building recommendation systems
- Enabling RAG applications

## Enable vector search in YugabyteDB

YugabyteDB supports vector search through the [pgvector extension](/preview/additional-features/pg-extensions/extension-pgvector/). This extension adds vector data types and distance functions to PostgreSQL.

### Quick setup

1. Enable the pgvector extension:
   ```plpgsql
   ysqlsh> CREATE EXTENSION vector;
   ```

2. Create a table with vector columns:
   ```plpgsql
   ysqlsh> CREATE TABLE documents (
       id SERIAL PRIMARY KEY,
       content TEXT,
       embedding vector(1536)
   );
   ```

3. Perform similarity search:
   ```plpgsql
   ysqlsh> SELECT * FROM documents 
           ORDER BY embedding <-> '[0.1, 0.2, 0.3]' 
           LIMIT 5;
   ```

## Learn more

- [pgvector extension reference](/preview/additional-features/pg-extensions/extension-pgvector/) - Complete pgvector documentation
- [Similarity search tutorial](/preview/ai/vector-search/similarity-search/) - Text similarity search
- [AI tutorials](/preview/ai/tutorials/) - Build AI applications with vector search
- [AI Movie Recommendations tutorial](/preview/ai/tutorials/ai-movie-recommendations/) - Complete AI application example
