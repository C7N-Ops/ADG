---
sidebar_position: 2
---

# ADG Implementation Quickstart

If you’re starting from zero, do this in order.

## Step 1 — Inventory agentic surface area

List:
- where agents write code
- where agents touch schema/migrations
- where agents touch CI/CD or infra
- what credentials and access they have
- what environments they can modify

Output artifact:
- `Agent Inventory` (agent name, scope, tools, permissions, environments)

## Step 2 — Establish the Action Ledger (minimum audit trail)

Your agent actions MUST emit structured logs (JSON preferred) with:
- timestamp (UTC)
- agent_id
- session/correlation_id
- action type
- inputs/parameters
- affected resources
- outcome (success/failure)
- duration
- rationale (for significant actions)
- user context (if agent acts “on behalf of” a human)

## Step 3 — Define high-risk checkpoints

Create a list of “approval required” actions:
- schema migrations
- auth/authz changes
- RLS/tenancy logic changes
- environment variable changes
- deployment to production
- secrets access changes
- permission/role changes

Then enforce one rule:
> agents may propose; humans approve.

## Step 4 — Enforce boundary invariants

At minimum:
- environment isolation (dev/staging/prod must not share resources)
- tenancy isolation (RLS/tenant filters must be verified)
- auth consistency (no unguarded routes)
- schema consistency (migrations verified, schema diff checks)

## Step 5 — Add drift detection

Start small:
- docs-to-code sync check (docs referenced by PR changes)
- schema drift detection in CI
- “invariant tests” that fail on boundary violations

## Step 6 — Iterate into Level 2 / Level 3

Once foundations work:
- add anomaly detection and alerts
- tighten policy engine
- improve dashboards and reporting
- expand governed agent coverage
