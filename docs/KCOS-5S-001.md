# KCOS-5S-001 — Engineering & Operations 5S Standard

**Status:** FROZEN HARD RULE  
**Scope:** All KCOS engineering, infrastructure, runtime, repository, data, build, evidence, automation, and human/agent operations.  
**Applicability:** Single host, multiple hosts, clusters, cloud, bare metal, GPU nodes, hybrid environments, and future infrastructure.

## 1. Purpose

5S is a foundational operating discipline, not a one-time cleanup activity.

The objective is to maintain an environment that is **organized, discoverable, clean, standardized, disciplined, observable, and continuously improvable**.

**5S does not depend on the number of machines.**

## 2. The Five S

| S | Japanese | Chinese | Engineering interpretation |
|---|---|---|---|
| 1S | Seiri | 整理 | Identify necessary vs unnecessary objects and remove unnecessary state |
| 2S | Seiton | 整顿 | Give every necessary object a declared owner, location, identity, and retrieval path |
| 3S | Seiso | 清扫 | Clean abnormal/stale state while using cleaning to expose defects |
| 4S | Seiketsu | 清洁 | Standardize the desired state and make it repeatable |
| 5S | Shitsuke | 素养 | Make the standard habitual and enforceable for people and agents |

## 3. Core Principles

1. Everything has a purpose, owner, location, identity, and lifecycle.
2. Unknown state is an abnormal state.
3. Cleanup is not deletion; cleanup is controlled disposition.
4. A temporary object must have a cleanup condition.
5. A working feature does not PASS if the environment is left degraded.
6. Standards must be executable, observable, auditable, and repeatable.
7. Human operators and AI agents follow the same environmental discipline.
8. 5S is continuous management, not a periodic cosmetic exercise.

## 4. 1S — 整理 / Seiri

Identify unnecessary state and remove it through controlled disposition.

Applicable objects include processes, workers, services, containers, ports, tunnels, repositories, branches, build artifacts, caches, downloads, temporary files, diagnostic outputs, obsolete logs, unused dependencies, and stale test environments.

Required question:

> Is this object still necessary, and can its owner and purpose be identified?

Do not delete production data merely because it appears unused. Unknown data requires identification and evidence before disposition.

## 5. 2S — 整顿 / Seiton

Every necessary object has a known place and identity.

Minimum metadata:

**Owner | Project | Service | Location | Identity | Lifecycle | Retention**

For runtime objects:

**Project | Service | Git SHA | PID/Container ID | Port | Purpose**

For evidence:

**Project | Task | Evidence Type | Source | Timestamp | Result**

For temporary work:

**Project | Purpose | Started | Cleanup Deadline | Cleanup Result**

## 6. 3S — 清扫 / Seiso

Cleaning includes active inspection.

Cleaning MUST look for orphaned processes, stale runtimes, duplicate services, unknown listeners, runaway workers, abnormal CPU/RAM/GPU usage, uncontrolled disk growth, abandoned tunnels, failed jobs, oversized/unbounded logs, stale caches, and temporary artifacts left behind.

Therefore:

> 清扫 = 清理 + 异常发现。

## 7. 4S — 清洁 / Seiketsu

Convert the correct state into a maintained standard.

KCOS standards MUST define, where applicable: naming, directory placement, runtime identity, canonical ports, lifecycle, resource boundaries, logging, evidence, cleanup, backup, recovery, and Gate criteria.

The objective is to prevent every project from inventing its own environmental rules.

## 8. 5S — 素养 / Shitsuke

5S applies to engineers, operators, QA/QE, CI/CD, scripts, workers, Codex, AI agents, and autonomous construction systems.

No actor may use the environment as an unmanaged scratch space.

A construction actor must leave the environment in a known state.

## 9. Infrastructure / Host 5S

For any host or node:

- resource ownership must be identifiable;
- production and disposable state must be separated;
- canonical ports must be controlled;
- runtime identities must be traceable;
- temporary processes and ports must have cleanup conditions;
- disk growth must be observable;
- critical resources must not be consumed without an identifiable purpose.

Host/node health is part of construction quality.

## 10. Repository 5S

Repositories must not accumulate unmanaged generated binaries, local secrets, temporary exports, debug dumps, machine-specific artifacts, obsolete test output, or accidental large files.

Repository source, generated artifacts, evidence, and disposable work products must have explicit disposition rules.

## 11. Data 5S

Production data, runtime state, cache, logs, backups, and temporary data must be distinguishable.

No uncontrolled mixing.

Deletion, migration, archival, and retention require explicit rules appropriate to the data class.

## 12. Build / Artifact 5S

Every generated artifact must have a producer, source revision, purpose, lifecycle, and retention/disposition rule.

Build output that has no owner or purpose is not considered healthy environment state.

## 13. Evidence 5S

Evidence must be attributable, timestampable, reproducible where applicable, stored in a declared location, linked to the construction task, and distinguishable from temporary diagnostics.

**No evidence owner = unmanaged evidence.**

## 14. Runtime Lifecycle

All temporary or constructed runtimes follow:

**DECLARE → START → IDENTIFY → VALIDATE → STOP/RETAIN → VERIFY**

Forbidden:

**START → TEST → FORGET**

and:

**FAIL → START ANOTHER → LEAVE OLD PROCESS**

Port hopping is not cleanup.

## 15. 5S Gate

A construction result is not PASS when any of the following remains unexplained:

- unknown critical process;
- unknown listener;
- duplicate unmanaged runtime;
- uncontrolled resource consumption;
- uncontrolled disk growth;
- mixed production/disposable state;
- abandoned temporary process;
- abandoned temporary port/tunnel;
- missing ownership;
- missing cleanup result;
- environment instability caused by construction.

Required result:

**5S-GATE = PASS**

or:

**5S-GATE = FAIL**

## 16. Continuous Improvement

5S findings must feed back into engineering standards.

Repeated exceptions indicate a missing or weak standard.

Therefore:

**Observed problem → Root cause → Standard correction → Automation where appropriate → Verification**

5S is not the endpoint; it is the baseline for continuous improvement.

## 17. Relationship to Other KCOS Standards

KCOS-5S-001 is the global foundation.

Project-specific standards may specialize it but MUST NOT weaken it.

Examples:

- RUNTIME-PORT-001 — runtime port discipline;
- RUNTIME-GATE-001 — runtime validation;
- host/node standards — infrastructure execution;
- project construction standards — project-specific implementation.

## Core Rule

> Keep only what is necessary. Give it a place. Keep the place clean. Standardize the correct state. Make the discipline habitual.

And:

> Do not merely make the system work. Leave the engineering environment better controlled than you found it.
