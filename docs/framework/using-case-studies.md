---
sidebar_position: 10
---

# Using Case Studies

Case studies are the fastest way to make ADG real for engineering teams: they convert abstract drift and boundary failures into patterns people can recognize, prevent, and respond to.

This guide explains how to operationalize the Concepts case studies in day-to-day governance work.

Related:
- Concepts index: **/docs/concepts/case-studies**
- Standards: **/docs/standards/**

## When to use case studies

Use case studies to:
- train teams on common agentic failure modes (tenancy leakage, migration damage, doc desync)
- calibrate risk classification for oversight (see **/docs/standards/human-oversight-standards**)
- prioritize which controls to implement first (gates, monitors, logging, drift detection)
- run tabletop exercises and incident retrospectives

## The “Case Study Review” operating loop

Run this loop weekly (or at a cadence that fits your change rate):

1. **Select**
   - choose 1 case study tied to current work (migrations, auth changes, infra changes, large refactors)
2. **Analyze**
   - map the narrative to the Failure Modes taxonomy (**/docs/concepts/failure-modes-drift-taxonomy**)
3. **Extract controls**
   - identify which controls would have prevented or reduced impact
4. **Implement**
   - add one small, verifiable control improvement
5. **Measure**
   - track whether the control reduces the targeted class of failures

## A lightweight facilitation format (30–45 minutes)

### Agenda
- 5 min — Read the summary
- 10 min — Identify the failure mode category (Boundary / Coherence / Integration / Observability / Supply chain)
- 10 min — Identify “missed signals” (what you would want logged, tested, or gated)
- 10 min — Pick 1 control improvement and assign an owner
- 5 min — Define evidence to prove it works

### Output artifacts
- `Case Study Review Notes` (date, attendees, case, key learnings)
- `Control Change Request` (what changes, where enforced, how measured)
- `Evidence Sample Plan` (what logs/tests/records demonstrate effect)

## Mapping a case study to controls

Use this mapping to turn narrative into action:

- **Tenancy leakage**
  - controls: tenancy boundary tests, RLS verification, query scoping checks
  - evidence: test results + representative queries + incident-style reproduction
- **Authorization ambiguity**
  - controls: route protection checks, policy-as-code gates for auth changes
  - evidence: protected route inventory + failing test samples for unguarded routes
- **Schema drift / migration damage**
  - controls: migration verification in CI, schema diff checks, rollback readiness
  - evidence: migration rehearsal logs + schema diff artifacts
- **Documentation desynchronization**
  - controls: doc-to-code sync gates, doc update requirements for significant changes
  - evidence: PR templates + doc checks + sample synced changes
- **Non-replayable actions**
  - controls: action ledger completeness, correlation IDs, rationale capture
  - evidence: trace bundles showing end-to-end reconstruction

## Where to store and how to tag

Recommended tags (keep it simple):
- Phase: Design / Implementation / CI / Deploy / Runtime / Incident
- Failure Mode: Boundary / Coherence / Integration / Observability / Supply chain
- Severity: Low / Medium / High
- Reversibility: Easy / Moderate / Hard

> TODO: Add a shared “Case Study Metadata” template if you want consistent tagging across the corpus.

## Avoiding the most common failure: “stories with no change”

A case study is only useful if it changes behavior. If you run reviews but never ship controls, you’re building a library of regret.

A practical rule:
- for every 2 case study sessions, ship at least 1 control improvement with evidence.
