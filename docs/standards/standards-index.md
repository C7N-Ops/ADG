---
sidebar_position: 2
---

# ADG Framework v1.0 — Standards Index (ISO-style)

This document defines the structure of the ADG standards suite and how to claim compliance.

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

Canonical definitions are maintained in:
- `docs/concepts/definitions-agentic-development.md`

## 4. Compliance Levels

### Level 1 — Foundation
Minimum governance:
- basic action logging
- identifiable agent identity
- defined scope boundaries
- at least one human checkpoint for high-risk actions

### Level 2 — Standard
Enterprise governance baseline:
- complete audit trails
- explicit human oversight model
- policy checks before risk-sensitive actions
- required environment boundary protections
- required schema and access-boundary verification

### Level 3 — Enhanced
High-risk / regulated governance:
- real-time monitoring and anomaly detection
- tamper-evident logs and longer retention
- automated compliance reporting
- higher-frequency validation and drift detection

## 5. Standards Groups

### 5.1 Agent Behavior Requirements (ABR)
Defines required agent behavior:
- action logging
- decision transparency
- scope boundaries
- error handling
- resource management

### 5.2 Agent Interaction Standards (AIS)
Defines requirements for:
- agent-to-agent coordination
- correlation IDs
- handoff protocols
- conflict resolution and deadlock prevention

### 5.3 Human Oversight Requirements (HOR)
Defines:
- oversight levels (0–4)
- checkpoint definitions
- approval workflows and recording requirements
- overrides and emergency controls

### 5.4 Audit & Compliance Requirements (ACR)
Defines:
- log completeness, retention, integrity
- audit trail reconstruction and replay support
- reporting formats and evidence packages

## 6. Verification & Evidence

To claim compliance at any level, an organization MUST produce:
- a list of governed agents and their scopes
- policy definitions and version history
- sample audit trails demonstrating required fields
- records of checkpoint approvals and overrides
- results of validation tests (RLS/boundary tests, schema checks, etc.)

## 7. Change control

Standards MUST be versioned. Implementations MUST document:
- which version of ADG standards they target
- deviations and compensating controls
- planned remediation timelines
