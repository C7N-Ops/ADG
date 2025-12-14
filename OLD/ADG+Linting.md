# ADG — Agent-Readable Doctrine Summary + Lint Checklist

---

## ADG: Core Doctrine (Condensed for Agents)

Agentic Development Governance (ADG) exists because **AI agents now create software faster than humans can meaningfully audit**.

ADG is the governance layer that ensures autonomous or semi-autonomous software development remains:

- coherent
- safe
- auditable
- intentional
- controllable

ADG governs **development-time behavior of AI agents** that write, modify, deploy, or maintain software.

ADG assumes:
- AI agents act autonomously or semi-autonomously
- Humans initiate or supervise but cannot review everything
- Traditional review and testing do not scale alone

Therefore:
- Governance must be explicit
- Boundaries must be machine-enforceable
- Oversight must be continuous
- Documentation must be authoritative
- Drift must be detected early

ADG is **not** AI ethics, model governance, or data governance.  
ADG focuses specifically on **how software is built using agents**.

---

## Canonical Scope Definition

ADG applies to agents that:
- generate or modify code
- change schemas or migrations
- alter CI/CD pipelines
- configure infrastructure
- deploy to environments
- update documentation related to code

ADG does NOT apply to:
- model training policies
- content moderation
- ethical alignment of models
- data privacy governance (except where it affects development actions)

---

## Non-Negotiable ADG Invariants

Any ADG-aligned system MUST preserve:

1. Architectural intent
2. Security and isolation boundaries
3. Environment separation
4. Documentation as source of truth
5. Full auditability of agent actions
6. Human accountability
7. Early detection of drift and risk

Violation of any invariant = **not ADG-compliant**

---

## ADG Lint Checklist (Machine-Enforceable)

Use this checklist to validate **any** ADG-related artifact.

### A. Scope & Taxonomy

- [ ] Does this content belong to **exactly one** pillar?
  - Concepts (WHAT / WHY)
  - Standards (MUST / SHALL)
  - Framework (HOW)
- [ ] If content spans pillars, is it explicitly split?
- [ ] Does it avoid category bleed (e.g., frameworks phrased as standards)?

---

### B. Conceptual Alignment

- [ ] Is “agentic development” defined consistently?
- [ ] Is the problem framed as **scale + autonomy**, not incompetence?
- [ ] Does it acknowledge that humans cannot fully audit agent output?
- [ ] Does it avoid claiming agents are “safe by default”?

---

### C. Governance Correctness

- [ ] Are boundaries explicit rather than implied?
- [ ] Are invariants named and protected?
- [ ] Is governance preventative, not purely reactive?
- [ ] Does it assume agents can and will make mistakes?

---

### D. Documentation Discipline

- [ ] Is documentation treated as authoritative?
- [ ] Does the content avoid “docs later” assumptions?
- [ ] If docs and code diverge, does this content state docs win?
- [ ] Are updates assumed to be continuous?

---

### E. Oversight & Accountability

- [ ] Is human accountability preserved?
- [ ] Are escalation points explicit?
- [ ] Are override mechanisms acknowledged?
- [ ] Does it avoid removing humans entirely from responsibility?

---

### F. Failure Awareness

- [ ] Are silent failures acknowledged?
- [ ] Are latent and cross-system failures considered?
- [ ] Does it address drift, coupling, or coherence loss?
- [ ] Does it avoid assuming CI/tests catch everything?

---

### G. Prohibited Claims (Hard Fail)

If ANY are true → reject or revise:

- [ ] Claims ADG guarantees bug-free software
- [ ] Claims human review alone is sufficient
- [ ] Claims testing replaces governance
- [ ] Mentions commercial products or vendors
- [ ] Drifts into AI ethics or model policy
- [ ] Treats governance as optional or advisory

---

### H. Outcome Test (Final Gate)

Answer YES to all:

- [ ] Does this make agentic development safer at scale?
- [ ] Does this reduce unknown risk?
- [ ] Does this preserve system coherence?
- [ ] Does this make future failures easier to understand and recover from?

If not → **Not ADG-aligned**

---

## Agent Instruction

When generating, reviewing, or modifying ADG content:

1. Apply this checklist mechanically
2. Flag all violations explicitly
3. Do not “paper over” contradictions
4. Prefer deletion over dilution
5. Preserve doctrinal consistency above completeness

ADG coherence > content volume.

---

## End of Agent Reference
