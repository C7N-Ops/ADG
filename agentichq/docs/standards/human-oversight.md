---
sidebar_position: 3
---

# Human Oversight Standards

These standards define requirements for human oversight of autonomous development agents.

## Philosophy

Human oversight in ADG is based on the principle that **humans remain ultimately accountable** for agent actions. Oversight mechanisms ensure humans can:

- Understand what agents are doing
- Intervene when necessary
- Maintain meaningful control
- Learn from agent behavior

## Oversight Levels

### Level 0: Autonomous
Agent operates independently within defined boundaries.
- Suitable for: Low-risk, reversible actions
- Example: Code formatting, documentation updates

### Level 1: Notify
Agent acts autonomously but notifies humans of actions.
- Suitable for: Moderate-risk, monitored actions
- Example: Dependency updates, test modifications

### Level 2: Approval Required
Agent proposes actions and waits for human approval.
- Suitable for: Higher-risk actions requiring judgment
- Example: API changes, database migrations

### Level 3: Supervised
Human actively monitors agent during action execution.
- Suitable for: Critical or irreversible actions
- Example: Production deployments, security changes

### Level 4: Human-Executed
Agent provides recommendations; human executes.
- Suitable for: Highest-risk actions
- Example: Data deletion, access control changes

## Oversight Requirements

### HOR-001: Checkpoint Definition

**Organizations must define oversight checkpoints for agent workflows.**

Requirements:
- Document all checkpoints in governance policies
- Specify oversight level for each checkpoint
- Define escalation criteria
- Review checkpoints periodically

### HOR-002: Approval Workflows

**Human approvals must be captured and recorded.**

Requirements:
- Identity of approver
- Timestamp of approval
- Scope of approval
- Any conditions or limitations

### HOR-003: Override Mechanisms

**Humans must be able to override agent decisions.**

Requirements:
- Clear override procedures
- Override logging and justification
- Post-override review process
- Override metrics tracking

### HOR-004: Emergency Controls

**Emergency stop capabilities must be available.**

Requirements:
- Kill switch accessibility
- Defined emergency procedures
- Recovery processes
- Post-emergency analysis

## Implementation Guidelines

### Balancing Oversight and Efficiency

Consider these factors when setting oversight levels:
- Risk of the action
- Reversibility
- Blast radius
- Regulatory requirements
- Organizational risk tolerance

### Avoiding Oversight Fatigue

Too much oversight can lead to:
- Rubber-stamping approvals
- Delayed workflows
- Developer frustration

Mitigate by:
- Right-sizing oversight to risk
- Automating low-risk decisions
- Providing context for approvers
- Measuring and optimizing approval times

## Next Steps

Explore [Audit & Compliance Standards](/docs/standards/audit-compliance).
