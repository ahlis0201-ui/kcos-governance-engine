# KCOS READ-GATE-001 — Mandatory SSOT Reading Gate

**Status:** FROZEN HARD RULE

Before any construction, modification, refactor, migration, configuration change, or release action:
1. Identify the applicable SSOT / Contract.
2. Read the complete applicable SSOT.
3. Record the exact SSOT commit/blob SHA read.
4. Record executor identity and acknowledgement in a Git-tracked Read Receipt.
5. Only then may construction begin.

**No receipt = NO CONSTRUCTION.**

Required receipt: `docs/governance/read-gate/READ-RECEIPT.md`

Required fields: Gate ID, Executor, SSOT ID, Version, Source Path, exact SHA, Read Scope=COMPLETE, acknowledgement, Gate Result=PASS, Evidence Commit.

A receipt is invalid if its SSOT SHA differs from the version used for construction. If the SSOT changes, a new receipt is required. Frozen SSOTs must not be edited in place.

Construction sequence:
`READ SSOT → RECORD SHA → ACKNOWLEDGE → GATE PASS → CONSTRUCT → VERIFY → REMOTE EVIDENCE`

Audit must establish what was read, which exact revision was read, who/what executor acknowledged it, and which construction commit followed.
