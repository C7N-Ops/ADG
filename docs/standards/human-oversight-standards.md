---
sidebar_position: 4
---

# Human Oversight Standards

These standards define requirements for human oversight of autonomous development agents.

## Principle

Humans remain ultimately accountable for agent actions. Oversight mechanisms MUST ensure humans can:
- understand what agents are doing
- intervene when necessary
- maintain meaningful control
- learn from agent behavior

## Oversight levels (normative model)

Organizations MUST define and use an oversight model. The following levels are RECOMMENDED:

### Level 0: Autonomous
Agent operates independently within defined boundaries.

### Level 1: Notify
Agent acts autonomously but notifies humans of actions.

### Level 2: Approval required
Agent proposes actions and waits for human approval.

### Level 3: Supervised
Human actively monitors the agent during execution.

### Level 4: Human-executed
Agent provides recommendations; a human executes.

> Note: Examples and operating guidance for applying these levels belong in **/docs/framework/**.

## Oversight requirements (HOR)

### HOR-001: Checkpoint definition

Organizations MUST define oversight checkpoints for agent workflows.

Checkpoint definitions MUST include:
- checkpoint name and purpose
- which workflows/actions the checkpoint applies to
- required oversight level at the checkpoint
- escalation criteria

Checkpoint definitions MUST be reviewed periodically (at an organization-defined cadence).

### HOR-002: Risk classification mapping

Organizations MUST define a risk classification method and map classifications to oversight levels.

The classification method MUST consider:
- reversibility
- blast radius
- access boundary impact (auth/tenancy/data access)
- schema/migration impact
- production impact

### HOR-003: Approval capture

When approvals are required, approval records MUST include:
- identity of approver
- timestamp of approval
- scope of approval
- conditions or limitations, if any

### HOR-004: Override mechanisms

Humans MUST be able to override agent decisions.

Override capability MUST include:
- a documented procedure
- override logging with justification
- post-override review requirement

### HOR-005: Emergency stop

Emergency stop capability MUST be available for governed agents.

Emergency stop procedures MUST include:
- accessibility (who can trigger, under what conditions)
- recovery steps
- post-emergency analysis requirement

## Evidence expectations

To demonstrate conformance, an organization MUST be able to produce:
- the checkpoint register (HOR-001)
- the risk classification → oversight mapping (HOR-002)
- approval and override logs (HOR-003, HOR-004)
- emergency stop procedure and activation records, when invoked (HOR-005)

Operating guidance lives in:
- **/docs/framework/oversight-operating-model**
