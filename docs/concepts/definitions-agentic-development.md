---
sidebar_position: 3
---

# Canonical Definitions

This page is the **single source of truth** for ADG terminology. Other pages should link here rather than restating definitions.

## Agentic Coding

**Agentic coding** is a development workflow where a human directs an AI agent to make code changes (often across multiple files and layers) and the agent executes those changes autonomously.

Key characteristics:
- the human provides goals/constraints, not line-by-line edits
- the agent may modify code, tests, configs, docs, and build scripts
- the output may be “usable” even if its internal structure is poor
- review is frequently partial due to volume and speed

## Agentic Programming

**Agentic programming** is a broader term covering agent-driven implementation of program behavior, not limited to “coding”:
- refactors
- dependency changes
- test generation
- API design
- performance improvements
- security-related changes (sometimes unintentionally)

Agentic programming emphasizes the agent’s role in shaping program behavior and architecture, not just writing syntax.

## Agentic Development

**Agentic development** is end-to-end software development performed with AI agents as active participants across the SDLC, including:

- feature development
- schema and migration work
- CI/CD pipeline changes
- infrastructure provisioning
- incident response automations
- documentation updates
- release management tasks

Agentic development often involves multiple agents operating in parallel and handing work off between each other.

## Agentic DevOps

**Agentic DevOps** is the application of agentic development to operational domains:

- deployment automation
- environment management
- secrets and config handling
- monitoring/alerting changes
- runbook execution
- rollback orchestration

Agentic DevOps increases speed but also increases risk because errors can be **systemic** and **fast**.

## Drift

**Drift** is the gradual (or sudden) divergence between:
- architectural intent and implemented reality
- documentation and behavior
- schema and code assumptions
- environments (dev/staging/prod)
- security policy and actual access paths

In agentic systems, drift can be accelerated by high-velocity, high-volume change.

## Agentic Development Governance (ADG)

**Agentic Development Governance (ADG)** is the discipline and implementation layer that ensures software created or modified by agents remains:

- correct
- coherent
- secure
- compliant
- documented
- maintainable
- auditable

ADG exists because traditional safeguards (manual review, ad hoc QA, “we’ll catch it later”) do not scale to agentic change velocity.
