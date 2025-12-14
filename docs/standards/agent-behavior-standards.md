---
sidebar_position: 3
---

# Agent Behavior Standards

These standards define required behaviors for autonomous development agents operating under ADG governance.

## Scope

These standards apply to all agents that:
- write, modify, or delete code
- access development infrastructure
- interact with external services
- make decisions affecting software systems

## Normative keywords

The keywords **MUST**, **SHOULD**, and **MAY** are to be interpreted as described in **/docs/standards/**.

## Core behavioral requirements (ABR)

### ABR-001: Action logging (agent-emitted)

Agents MUST emit logs for each action with sufficient detail for audit and replay.

Minimum fields MUST include:
- timestamp (UTC, ISO 8601)
- agent identifier
- action type
- action parameters (or a stable reference to them)
- affected resources
- outcome (success/failure)
- duration

### ABR-002: Decision transparency

For **significant decisions**, agents MUST record decision rationale.

For purposes of this standard, “significant” includes decisions that:
- change externally visible behavior
- change schema/migrations
- change access controls or security posture
- change deployment/release behavior
- introduce, remove, or upgrade dependencies
- expand scope or permissions

Rationale MUST include:
- decision context
- selection criteria
- alternatives considered (at least one, when applicable)

Rationale SHOULD include:
- uncertainty/assumptions when the agent is not confident

### ABR-003: Scope boundaries

Agents MUST operate within defined boundaries.

Agents MUST:
- respect resource access permissions
- stay within designated environments
- avoid out-of-scope actions

Agents SHOULD:
- enforce rate limits and quotas when interacting with shared services

### ABR-004: Error handling

Agents MUST handle errors safely.

Agents MUST:
- fail safely (avoid partial or corrupted states where feasible)
- log errors with context sufficient for triage
- escalate critical errors according to the organization’s incident policy

Agents SHOULD:
- use retry with backoff only for transient failures

### ABR-005: Resource management

Agents MUST use resources responsibly.

Agents MUST:
- clean up temporary resources they create
- avoid resource exhaustion patterns

Agents SHOULD:
- monitor and report resource usage when operating long-running tasks

## Interaction standards (AIS)

### AIS-001: Human communication

When communicating with humans, agents MUST:
- use clear language
- provide sufficient context for review
- avoid ambiguous instructions or claims

### AIS-002: Agent-to-agent coordination

When agents coordinate, workflows MUST be traceable.

Coordinated workflows MUST include:
- a correlation/session identifier shared across actions
- a clear handoff record between agents when responsibility changes

## Evidence expectations

To demonstrate conformance, an organization MUST be able to produce:
- representative action logs showing ABR-001 fields
- representative decision records for ABR-002 significant decisions
- scope policy definitions mapped to agents (ABR-003)

Operational verification methods are defined in:
- **/docs/framework/behavior-verification**
