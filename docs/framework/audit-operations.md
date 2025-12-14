---
sidebar_position: 22
---

# Audit Operations

This guide operationalizes:
- **/docs/standards/audit-compliance-standards**
- related logging requirements in **/docs/standards/agent-behavior-standards**

It describes how to run audits, produce evidence, and keep audit readiness from becoming a once-a-year scramble.

## Audit types

### 1) Readiness audit (routine)
Purpose: confirm you can produce evidence and reconstruct actions.

Cadence:
- monthly or quarterly, depending on change rate and risk

Outputs:
- evidence bundle refresh
- list of gaps and remediation tasks

### 2) Incident reconstruction audit (event-driven)
Purpose: rebuild a timeline and root cause for an agent-involved incident.

Outputs:
- timeline keyed by correlation/session IDs
- decision points and rationale
- approvals/overrides/emergency stops
- corrective actions mapped to controls

### 3) Control effectiveness audit (periodic)
Purpose: verify controls reduce targeted failure modes over time.

Outputs:
- trend metrics
- “before/after” comparisons
- updated priorities for control rollout

## What an audit needs to succeed

Minimum operational prerequisites:
- governed agent inventory
- searchable retained logs
- correlation/session ID discipline
- documented checkpoint register and oversight mapping
- a repeatable evidence bundle process

## The Evidence Bundle (keep it small)

Maintain a compact package that can be produced on demand:

- `Agent Inventory` (agents, scopes, environments, owners)
- `Policy Set` (behavior, oversight, boundaries, incident response)
- `Representative Action Trails`
  - one normal workflow
  - one significant change with rationale
  - one failure case (safe failure, escalation)
- `Oversight Records`
  - approvals, overrides, emergency stop records (if any)
- `Monitoring Artifacts`
  - violation detections, alerts, and response notes
- `Gap Register`
  - known deviations and remediation plan

This should be refreshed at a defined cadence.

## A practical monthly audit checklist

- [ ] Confirm agent inventory is current
- [ ] Confirm log retention is working (no missing windows)
- [ ] Sample 5 “significant actions” and verify rationale completeness
- [ ] Verify correlation/session IDs allow end-to-end reconstruction
- [ ] Validate checkpoint register matches actual high-risk changes being made
- [ ] Review violations/alerts and ensure responses were documented
- [ ] Record gaps and assign owners with due dates

## Incident reconstruction playbook (high-level)

1. Identify the triggering event (timestamp, service, symptom)
2. Pull correlated agent actions (by correlation/session ID)
3. Reconstruct timeline:
   - actions
   - outputs
   - decisions (rationales)
   - approvals/overrides
4. Classify the failure mode using:
   - **/docs/concepts/failure-modes-drift-taxonomy**
5. Identify prevention points:
   - what gate/test/logging would have caught it earlier?
6. Produce corrective actions:
   - controls to add
   - operational changes (checkpoint adjustment, oversight changes)
7. Update evidence bundle with the incident sample (appropriately redacted)

## Reporting cadence (operational guidance)

Define a cadence that matches your risk posture. Common patterns:
- weekly governance metrics snapshot (violations, approval latency, incidents)
- monthly readiness audit
- quarterly control effectiveness review

> TODO: Add a recommended metrics dashboard layout once your implementation has stable fields and names.
