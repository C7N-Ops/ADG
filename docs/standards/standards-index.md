---
sidebar_position: 2
---

# ADG Standards Suite Index v1.0

This document defines the structure of the ADG standards suite and how an organization claims compliance.

## 1. Scope

These standards apply to any system where AI agents:
- write or modify code
- change schema/migrations
- alter infrastructure or CI/CD
- deploy to environments
- operate with credentials or access rights
- influence production behavior

## 2. Non-goals

ADG does not attempt to:
- define moral or ethical principles for AI broadly
- govern non-engineering AI decision systems (e.g., HR, lending) directly
- replace security engineering, SRE, or compliance teams

ADG complements those disciplines by governing **agentic engineering behavior**.

## 3. Definitions

Canonical terminology is maintained in:
- **/docs/concepts/definitions-agentic-development**

## 4. Compliance levels

### Level 1 — Foundation
Minimum governance MUST include:
- agent action logging (at least core fields)
- identifiable agent identity
- defined scope boundaries
- at least one human checkpoint for high-risk actions

### Level 2 — Standard
Enterprise baseline MUST include:
- complete audit trails (including correlation/session)
- explicit human oversight model applied by risk classification
- policy checks before risk-sensitive actions
- protections for environment boundaries
- verification of access boundaries and schema change safety

### Level 3 — Enhanced
High-risk / regulated governance MUST include:
- tamper-evident logs and longer retention
- continuous compliance monitoring and alerting
- higher-frequency validation and drift detection appropriate to risk
- evidence packaging suitable for external review

## 5. Standards groups

### 5.1 Agent Behavior Requirements (ABR) and Agent Interaction Standards (AIS)
See: **/docs/standards/agent-behavior-standards**

### 5.2 Human Oversight Requirements (HOR)
See: **/docs/standards/human-oversight-standards**

### 5.3 Audit & Compliance Requirements (ACR)
See: **/docs/standards/audit-compliance-standards**

## 6. Claiming compliance

To claim compliance at any level, an organization MUST be able to produce:

1. **Inventory**
   - a list of governed agents
   - defined scopes (what each agent can and cannot do)
   - environments each agent can access

2. **Policy set**
   - agent behavior policy and version history
   - oversight policy (risk classification → oversight level mapping)
   - access boundary policy (tenancy, auth, environment separation)
   - incident response policy for agent-caused or agent-assisted incidents

3. **Evidence samples**
   - representative audit trails showing required log fields
   - records of approvals, overrides, and emergency stops (where applicable)
   - examples of detected violations and remediation actions

4. **Change control**
   - which version of ADG standards is targeted
   - deviations and compensating controls
   - remediation timelines for known gaps

## 7. Change control

Standards MUST be versioned. Implementations MUST document:
- targeted standards version
- deviations and compensating controls
- planned remediation timelines
