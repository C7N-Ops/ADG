---
sidebar_position: 2
---

# What is Agentic Development Governance?

Agentic Development Governance (ADG) is a systematic approach to governing **autonomous or semi-autonomous AI agents** that participate in software development activities.

## Canonical definition

The formal definition of ADG and related terms lives in **[Canonical Definitions](/docs/concepts/definitions-agentic-development)**.

This page explains the **problem framing**: why ADG exists and what it is trying to prevent.

## What ADG focuses on

ADG focuses on the **engineering and operational reality** of building software with agents:

- preserving **coherence** under autonomous change (code, schema, infra, docs)
- enforcing boundaries (auth, data access, tenancy, environments)
- ensuring **auditability** and **replayability** of agent actions
- preventing drift that can “work today” while becoming brittle or unsafe over time

## What ADG is (and is not)

### ADG is
- a governance layer for **agentic coding** and **agentic DevOps**
- a discipline for maintaining **architectural intent** under high-velocity change
- an approach to preventing “works now / breaks later” failures

### ADG is not
- a generic “AI ethics” program
- model governance or data governance
- a code assistant
- a linter
- a single CI check
- a compliance checklist divorced from engineering reality

## Why ADG is needed now

For decades, software safety relied on a stable assumption:

- humans wrote the code
- humans reviewed the code
- humans understood the code

Agentic development breaks that assumption:

- agents can generate **massive surface area** quickly
- the resulting system can “work” while hiding severe flaws:
  - tenancy leakage
  - authorization ambiguity
  - hidden coupling between environments
  - undocumented side effects
  - schema drift and migration damage
  - contradictions between docs and runtime behavior

ADG is the missing layer that makes agentic software **auditable, enforceable, and maintainable**.

## Core outcomes ADG targets

- **Transparency:** actions are visible and explainable
- **Accountability:** actions are attributable and reviewable
- **Controllability:** humans can pause/stop/override agent actions
- **Compliance:** policies are enforced at critical boundaries and gates
- **Continuous improvement:** the system learns from incidents and near-misses
