---
sidebar_position: 20
---

# Behavior Verification

This guide explains practical ways to verify conformance to:
- **/docs/standards/agent-behavior-standards**
- **/docs/standards/audit-compliance-standards**

It focuses on operational verification: checks, sampling, dashboards, and evidence packaging.

## What you are verifying

At minimum, verify that you can:
- reconstruct what an agent did (action ledger completeness)
- attribute actions to an agent identity and workflow session
- locate the rationale for significant actions
- detect boundary-violating behavior early (scope, auth, tenancy, environments)

## Verification layers

Use multiple layers; each catches different failure modes.

### Layer 1 — Schema validation for action logs
Goal: prevent “logs exist but are unusable”.

Practices:
- validate presence and type of required fields
- reject malformed or missing log events
- enforce correlation/session IDs for multi-step workflows

Evidence:
- sample log payloads (success + failure)
- validation failure rates over time

### Layer 2 — Coverage checks (are you logging everything you think you are?)
Goal: avoid “silent paths” that bypass logging.

Practices:
- enumerate governed agents and expected action types
- compare observed log action types vs expected
- flag missing event types (e.g., deploy, migration, secrets access)

Evidence:
- `Expected Actions Registry` (per agent)
- weekly coverage diff report

### Layer 3 — Sampling-based review of significant decisions
Goal: ensure rationale is present and useful.

Practices:
- define what counts as “significant” (align with ABR-002 in standards)
- review a weekly sample of significant actions:
  - does the rationale exist?
  - does it describe context, criteria, and an alternative (where applicable)?
  - are assumptions recorded?

Evidence:
- sampling checklist
- annotated sample set (redacted if necessary)

### Layer 4 — Boundary monitoring (scope, auth, tenancy, environments)
Goal: detect high-severity failures early.

Practices:
- monitor for out-of-scope resource attempts
- detect environment boundary violations (prod actions from non-prod contexts)
- add targeted tests for tenancy and authorization invariants

Evidence:
- alert definitions and sample alerts
- invariant test results

### Layer 5 — Replay drills (can you reconstruct and explain an incident?)
Goal: confirm auditability under pressure.

Practices:
- run quarterly replay drills using a selected workflow:
  - choose a “significant action”
  - reconstruct the full sequence from correlation IDs
  - identify decision points and approvals/overrides (if any)

Evidence:
- replay drill notes
- gaps found + corrective actions

## Minimal verification checklist

- [ ] Each governed agent has a defined identity (agent_id) and owner
- [ ] Logs include correlation/session IDs for workflows
- [ ] Significant actions include rationale records
- [ ] Coverage report exists (expected vs observed action types)
- [ ] Boundary violations are detectable (tests and/or alerts)
- [ ] At least one replay drill has been completed and documented

## Evidence packaging (what to keep ready)

Maintain a small evidence bundle you can hand to internal reviewers:

- `Agent Inventory` (agents, scopes, environments)
- `Log Schema` (field definitions)
- `Representative Logs`
  - normal workflow sample
  - failure workflow sample
  - significant change sample with rationale
- `Coverage Report` (recent)
- `Replay Drill` record (most recent)

> TODO: Add an evidence bundle folder structure recommendation if you want strict consistency across teams.
