---
sidebar_position: 21
---

# Oversight Operating Model

This guide explains how to apply:
- **/docs/standards/human-oversight-standards**
in daily engineering operations without creating “approval theater”.

## Objectives

An effective oversight model:
- routes human attention to the highest-risk agent actions
- reduces rubber-stamp approvals
- preserves speed for low-risk work
- creates clear records for later audit and learning

## Inputs you need

Before this works well, have:
- `Agent Inventory` (who/what/where)
- `Checkpoint Register` (what actions require what oversight)
- a simple risk classification method (see HOR-002)

## Oversight levels in practice

Use the oversight levels described in **/docs/standards/human-oversight-standards** as an organization-wide vocabulary.

Operational guidance:
- prefer **Notify** for low-risk, reversible changes
- use **Approval required** for changes with high blast radius or boundary impact
- use **Supervised** for time-sensitive or complex production workflows
- use **Human-executed** for exceptionally sensitive actions (e.g., access boundary changes in high-risk environments)

## Building the Checkpoint Register

Start small: define checkpoints for a short list of high-risk action categories.

Suggested initial categories:
- schema migrations
- auth/authz changes
- tenancy logic and RLS/policy changes
- secrets/credentials scope changes
- CI/CD pipeline modifications
- production deploys and rollbacks
- dependency upgrades that affect runtime or security posture
- environment configuration changes

Checkpoint record fields (recommended):
- checkpoint name
- action category
- required oversight level
- escalation criteria
- evidence required (logs, diff, tests, rationale)
- owner (team)

## Risk classification (simple but effective)

A lightweight classification can be computed with 5 questions:

1. **Blast radius:** how many systems/users/tenants can be affected?
2. **Reversibility:** can you roll back safely and quickly?
3. **Boundary impact:** does it touch auth, tenancy, secrets, or environment separation?
4. **Schema impact:** does it change schema/migrations?
5. **Production impact:** does it change production behavior directly?

Operational rule:
- if 2+ answers are “high”, treat as high-risk and elevate oversight.

> TODO: If you want formal scoring bands, define them in Framework and keep the standards “policy-agnostic”.

## Approval packets (reduce rubber-stamping)

When an approval is required, the approver should receive a standard packet:

- concise summary (what changes, why)
- diff or change set reference
- risk classification result
- rationale for significant decisions
- validation evidence (tests, checks, migration rehearsal, etc.)
- rollback plan (for production-impacting changes)

If approvers lack this context, approvals become symbolic.

## Escalation and emergency stops

Operationalize:
- who can override an agent decision
- who can trigger emergency stop
- what happens immediately after (triage, containment, replay reconstruction)
- how post-incident learning updates checkpoints and policies

Reference:
- Evidence requirements live in **/docs/standards/human-oversight-standards**
- Replayability support: **/docs/framework/behavior-verification**

## Metrics that reveal whether oversight is working

Track a small set:

- approval latency (median / p95)
- override frequency and reasons
- emergency stop events (count and outcomes)
- incident rate tied to agentic changes
- % of significant actions with complete rationale records

Interpretation tips:
- very low latency + low context packets often indicates rubber-stamping
- very high latency suggests checkpoints are too broad or poorly routed

## Common failure modes (and mitigations)

- **Approval theater:** approvals exist but no one understands them
  - mitigate with approval packets + sampling review
- **Checkpoint sprawl:** too many approvals, everything slows
  - mitigate by narrowing to boundary-impacting actions
- **Shadow automation:** teams bypass governed agents because governance is painful
  - mitigate by making compliance easier than bypassing

> TODO: Add a sample checkpoint register table once you standardize your internal fields.
