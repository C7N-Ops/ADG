---
sidebar_position: 5
---

# Failure Modes & Drift Taxonomy

Agentic development introduces failure modes that often:
- pass basic tests
- “work” in the short term
- surface only after drift accumulates

This taxonomy is a practical map of the failures ADG is designed to prevent.

## Category 1 — Boundary Failures

### 1.1 Tenancy leakage
Symptoms:
- cross-tenant reads or writes
- inconsistent tenant scoping in queries
- “admin” paths that bypass tenancy inadvertently

Typical causes:
- missing tenant filters
- RLS policies absent/incomplete
- bypass roles (owner roles, misconfigured DB roles)
- background tasks executed without correct tenant context

### 1.2 Authorization ambiguity
Symptoms:
- endpoints that succeed without proper permission checks
- “helper” routes not protected
- inconsistent admin checks across routes

Typical causes:
- duplicated auth logic
- inconsistent middleware usage
- agent-generated endpoints that skip guardrails

## Category 2 — Coherence Failures

### 2.1 Architectural intent drift
Symptoms:
- new patterns appear without explanation
- ad hoc abstractions multiply
- duplicate “ways to do the same thing”

Typical causes:
- agents optimize locally
- humans approve diffs without full context
- no enforced architectural constraints

### 2.2 Documentation desynchronization
Symptoms:
- docs describe behavior that no longer exists
- onboarding docs become untrustworthy
- “tribal knowledge” replaces documentation

Typical causes:
- docs treated as optional
- agents update code faster than docs
- no doc sync gates

## Category 3 — Integration & Environment Failures

### 3.1 Hidden coupling
Symptoms:
- changes in one subsystem break another unexpectedly
- env vars renamed, shared, or collapsed
- staging/prod boundaries blur

Typical causes:
- agent refactors config without semantic understanding
- no environment isolation tests
- insufficient “blast radius” analysis

### 3.2 Schema drift and migration damage
Symptoms:
- migrations that work in dev but fail in prod
- orphaned migrations
- inconsistent naming and constraints
- runtime code expecting schema that doesn’t exist

Typical causes:
- agents generate migrations without lifecycle awareness
- missing schema diff checks
- insufficient migration verification in CI

## Category 4 — Observability Failures

### 4.1 Non-replayable actions
Symptoms:
- you cannot reconstruct what the agent did
- logs lack correlation IDs or context
- “it changed something” without full trace

Typical causes:
- logging is partial or human-oriented
- no structured action ledger
- missing decision rationale capture

### 4.2 Silent regressions
Symptoms:
- metrics degrade slowly
- correctness erodes without obvious breaking changes
- error rates climb without clear root cause

Typical causes:
- high change velocity
- insufficient regression testing
- lack of drift/anomaly detection

## Category 5 — Security & Supply Chain Failures

### 5.1 Dependency and toolchain risk
Symptoms:
- unsafe upgrades
- pinned versions removed
- compromised packages introduced

Typical causes:
- agents “update everything” without risk scoring
- lack of SBOM/lockfile protection policies
- missing change classification gates

## What ADG does about this

ADG introduces:
- enforced boundaries (tenancy, auth, environments)
- verification gates (schema/RLS checks, doc sync, invariants)
- a structured audit trail (action ledger + rationale)
- drift detection and anomaly monitoring
- escalation and human oversight at high-risk checkpoints
