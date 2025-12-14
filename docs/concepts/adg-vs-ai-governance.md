---
sidebar_position: 4
---

# ADG vs “AI Governance”

ADG is related to AI governance, but it is **not the same thing**.

## What most “AI governance” focuses on

Traditional AI governance typically focuses on:
- ethical use
- bias/fairness
- model risk management
- regulatory alignment
- privacy and data handling
- transparency and accountability at the model/decision layer

This is important—especially for AI systems making decisions about people.

## What ADG focuses on

ADG focuses on the **engineering and operational reality** of building software with agents:

- codebase coherence under autonomous change
- architectural intent preservation
- tenancy and access boundary enforcement (e.g., RLS, permissions)
- documentation synchronization as a governance primitive
- environment isolation and deployment safety
- auditability and replayability of agent actions
- policy enforcement at merge/deploy gates
- drift detection across code/schema/infra/docs

## Why this distinction matters

A company can have excellent AI ethics policies and still ship agentic software that:
- silently leaks tenant data
- creates brittle migrations
- introduces environment coupling
- bypasses security invariants
- accumulates contradictory architecture over time

ADG addresses these failures directly.

## The ADG difference (positioning statement)

Most AI governance is about **how AI systems should behave**.

ADG is about **how software must be built** when AI systems are doing the building.
