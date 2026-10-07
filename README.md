> ## 🏭 KCOS FACTORY GOVERNANCE — 工厂治理条例

## 🏭 Repository Lifecycle Endpoint

**Development endpoint:** `DEVELOPMENT_COMPLETE` — declared release scope, Gate/evidence, reproducible artifact and frozen baseline complete.

**Operations endpoint:** `OPERATIONS_READY` — released baseline is owned, observable, recoverable and operationally stable.

**Maintenance boundary:** new features require a new controlled development scope; operations does not silently reopen development.

**Retirement endpoint:** `RETIRED` — dependencies, traffic/jobs, data, credentials and final evidence dispositioned.

SSOT: `docs/governance/lifecycle/REPOSITORY-END-STATE-001.md`
>
> **本仓库属于 KCOS 工业化生产线。**
>
> 本仓库的工程、文档、资产、评审与发布工作，必须遵守 KCOS 工厂治理标准。  
> This repository is part of the KCOS Industrial Production Pipeline and is governed by the KCOS Factory Governance Standards.
>
> **Mandatory Governance Baselines**
> - **KCOS-DOCUMENT-LIFECYCLE-001 V1.0 — FROZEN** — 文档生命周期治理唯一真值
> - **KCOS-5S-001** — 工程与运营 5S 基线
> - **EPS-001** — Engineering Production System / 职责与生产治理
>
> **Engineering Lifecycle**
> `Spec → Review → Impl → Freeze → Iterate`
>
> **Governance Infrastructure**
> `SSOT → Gate → Evidence → Remote Proof`
>
> **Factory Rules**
> 1. SSOT 是唯一真值；不得以局部实现、聊天记录或个人判断替代 SSOT。
> 2. Frozen Baseline 禁止原地修改；变更必须建立新版本并经过规定的 Review → Gate → Freeze 流程。
> 3. 治理结论必须有 Evidence；无证据不形成结论。
> 4. 禁止伪修复、降规格修复、绕过评审、绕过 Gate。
> 5. 工程生命周期与文档生命周期是正交模型，不得混用。
> 6. 仓库本地规则不得与 KCOS 工厂治理标准冲突。
>
> **Entry Rule:** 开始施工前，先识别本仓库适用的 SSOT、Contract、Gate 与 Evidence 要求。
>
> — KCOS Factory Governance · **FROZEN BASELINE**

# KCOS Governance Engine

Central governance SSOT for the KCOS ecosystem.

## Host Runtime

- HOST-5S-001 — Single-Host 5S Operations & Runtime Hygiene Standard

The host standard applies across all KCOS sites and services sharing the same physical/virtual host.


## Global 5S Standard

- [KCOS-5S-001 — Engineering & Operations 5S Standard](docs/KCOS-5S-001.md) — global baseline for infrastructure, runtime, repository, data, artifacts, evidence, and human/agent operations.


## Governance Closure — Decision-Forward Standardization

**Status: FROZEN HARD RULE**

KCOS adopts the following management principle across engineering, operations, quality, and AI-agent execution:

> **Decision is moved forward into sampling/prototyping and validation. Once the standard is frozen, execution follows defined values, tolerances, contracts, and exception procedures. Normal execution does not reopen frozen decisions.**

Operating model:

**Requirement → Prototype/Sample → Validation → Correction → Standard Freeze → Execution → Measurement → PASS/FAIL → Exception Process**

Normal execution SHALL use the frozen SSOT, standard values, upper/lower tolerances, acceptance criteria, and evidence requirements. Ambiguity discovered during execution is treated as a standard-gap or exception and MUST NOT be resolved by ad-hoc reinterpretation.

This principle complements `KCOS-5S-001`, QA/QC/QE, Evidence, Gate, Runtime, and construction governance.


---

## KCOS Artifact Classification Gate — Mandatory

本仓库的仓库存在不等于成品存在。施工前必须先完成 Artifact Classification。

适用分类：T01 Finished Product、T02 Backend Product、T03 Program Feature、T04 Test System、T05 Reference Implementation、T06 Development Tool、T07 Infrastructure、T08 Developer Artifact、T09 Data/Knowledge Asset、T10 Governance Artifact、T11 Prototype/PoC/Demo、T12 Legacy/Archive。

**硬规则：** Backend PASS ≠ Product PASS；Feature PASS ≠ Product PASS；Test PASS ≠ Product PASS；Reference PASS ≠ Production PASS。

**施工前门禁：** 阅读 ARTIFACT-CLASSIFICATION-001，声明本仓库/本次施工对象的 Artifact Type、Parent Product、Quality Gate 与 Release Artifact；未完成分类不得进入成品质量验收。

SSOT: docs/governance/ARTIFACT-CLASSIFICATION-001.md
