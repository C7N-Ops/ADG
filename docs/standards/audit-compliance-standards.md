---
sidebar_position: 5
---

# Audit & Compliance Standards

These standards define requirements for auditing agent activities and demonstrating compliance with governance policies.

## Audit requirements (ACR)

### ACR-001: Comprehensive logging (org-retained)

Organizations MUST retain logs for governed agent activity sufficient to reconstruct actions.

Minimum retained fields MUST include:
- timestamp (UTC, ISO 8601)
- agent identifier
- session/correlation identifier
- action type
- input parameters (or stable references)
- output/result (or stable references)
- duration
- user/request context, when applicable

### ACR-002: Retention

Organizations MUST define and enforce retention periods for agent logs.

Retention periods MUST be:
- risk-based and policy-defined
- at least **90 days** for standard actions
- at least **1 year** for security-relevant actions
- at least **7 years** for compliance-critical actions, or longer if required by applicable obligations

### ACR-003: Integrity and access control

Organizations MUST protect log integrity and restrict access.

Organizations MUST implement:
- tamper-evident or immutable storage controls appropriate to risk
- access controls on log systems
- backup and recovery procedures

### ACR-004: Audit trail completeness

Audit trails MUST support reconstruction of agent activity.

Audit trails MUST preserve:
- sufficient detail for action replay (where feasible)
- contextual linkage between related actions (correlation)
- associated decision rationale when required by ABR-002

## Compliance monitoring and reporting

### ACR-005: Policy monitoring

Organizations MUST monitor for policy violations and MUST define:
- what constitutes a violation
- detection mechanisms (automated and/or manual)
- escalation paths and response SLAs

Organizations SHOULD implement real-time alerting for high-severity violations.

### ACR-006: Reporting

Organizations MUST define a compliance reporting cadence and produce reports appropriate to their risk and obligations.

Reports MUST be able to support:
- internal governance review
- incident review and corrective action tracking
- external evidence packaging when required

> Recommended cadences and operational templates belong in **/docs/framework/audit-operations**.

## Out of scope

Formal “certification programs” are out of scope for the public ADG standards corpus.

## Next steps

Ready to implement? Start with the **/docs/framework/** pillar.
