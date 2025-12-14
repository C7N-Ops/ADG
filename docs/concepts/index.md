---
sidebar_position: 1
---

# Concepts

Agentic Development Governance (ADG) is the governance discipline for **building, changing, and shipping software with AI agents**—especially when humans cannot realistically audit every change an agent makes.

This section establishes the **definitions, mental models, and failure modes** that make ADG necessary.

## Start here

1. **[What is ADG?](./what-is-adg.md)**
2. **[Canonical Definitions](./definitions-agentic-development.md)**
3. **[ADG vs “AI Governance”](./adg-vs-ai-governance.md)**
4. **[Failure Modes & Drift Taxonomy](./failure-modes-drift-taxonomy.md)**

## The ADG difference

Most governance discussions focus on **ethics**, **model risk**, **policy**, and **compliance** at the *AI/model layer*.

ADG focuses on **software coherence** at the *engineering layer*:

- preventing drift across code, schema, infra, and docs
- enforcing access boundaries (multi-tenancy, RLS, env separation)
- ensuring auditability of high-velocity agent output
- maintaining architectural intent under autonomous change
