---
sidebar_position: 3
---

# Governance Controls Checklist

Use this as a pragmatic implementation checklist.

## Identity & attribution
- [ ] Agents have unique identities (agent_id)
- [ ] Actions are traceable to a responsible party (human owner or team)
- [ ] Correlation IDs exist for multi-step workflows

## Logging & audit trail
- [ ] Action ledger captures required fields (timestamp, inputs, outputs, resources, rationale)
- [ ] Logs are searchable and retained per policy
- [ ] Log integrity is protected (at least access controls; ideally tamper-evident storage)

## Oversight
- [ ] High-risk checkpoints are defined
- [ ] Approvals are recorded with approver identity + timestamp + scope
- [ ] Overrides are possible and logged

## Boundaries & invariants
- [ ] Environment boundaries are enforced and tested
- [ ] Tenancy boundaries are enforced and tested (RLS or equivalent)
- [ ] AuthZ is consistent (no unguarded routes)
- [ ] Secrets and credentials are least-privilege and rotated

## Change safety
- [ ] CI blocks merges that violate invariants
- [ ] Schema migration verification exists
- [ ] Rollback plans exist for high-risk changes

## Drift control
- [ ] Docs synchronization checks exist
- [ ] Schema drift checks exist
- [ ] Monitoring detects anomaly patterns (error spikes, unusual deploy patterns)

## Reporting
- [ ] Governance metrics exist (policy violations, approval latency, incident rate)
- [ ] Evidence packages can be produced for audits
