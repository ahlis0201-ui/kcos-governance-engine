# HOST-5S-001 — Single-Host 5S Operations & Runtime Hygiene Standard

**Status:** FROZEN HARD RULE  
**Scope:** All KCOS sites, services, workers, tunnels, databases, caches, media services, temporary runtimes, build artifacts, logs, and diagnostic processes sharing one host.

## Principle

**One host is one production environment.**

All sites share physical resources. No project may treat the host as disposable workspace.

The objective is not merely that every site works; the **host itself must remain operable, observable, recoverable, and clean**.

### 5S

1. **整理 Seiri** — remove unnecessary processes, files, services, caches, ports, tunnels, and artifacts.
2. **整顿 Seiton** — every runtime, port, directory, log, data volume, and temporary artifact has an owner and declared location.
3. **清扫 Seiso** — clean stale processes, temporary files, failed jobs, orphaned runtimes, abandoned tunnels, and oversized logs.
4. **清洁 Seiketsu** — standardize resource, naming, port, lifecycle, logging, backup, and recovery practices.
5. **素养 Shitsuke** — every operator/agent follows the rules before, during, and after construction.

## 1. Single-Host Invariants

- One service has one declared owner.
- One runtime has one identity: Project + Service + Git SHA + PID/Container ID + Port.
- Canonical ports MUST NOT be duplicated.
- Temporary ports require an explicit purpose and cleanup deadline.
- Temporary processes MUST NOT survive their diagnostic task.
- No arbitrary files may be dumped into system/temp/project directories.
- Logs, caches, builds, downloads, and evidence MUST have declared storage locations.
- Production data and disposable artifacts MUST NOT share an uncontrolled directory.
- A project MUST NOT consume host resources without an identifiable reason.

## 2. Resource Protection

CPU, RAM, disk, GPU, network, and file descriptors are shared resources.

- Before heavy jobs, inspect host capacity.
- After heavy jobs, verify resources return to an acceptable baseline.
- Memory leaks, runaway workers, orphaned processes, and unbounded logs are **host incidents**, not merely project incidents.
- Disk growth MUST be observable.
- A site being functional does NOT constitute PASS if it destabilizes the host.

## 3. Runtime Lifecycle

Every runtime follows:

**DECLARE → START → IDENTIFY → VALIDATE → STOP/RETAIN → VERIFY**

Forbidden:

**START → TEST → FORGET**

and:

**FAIL → START ANOTHER → LEAVE OLD PROCESS**

## 4. Port Discipline

HOST-5S-001 works together with project-level RUNTIME-PORT-001.

Before occupying a port:

1. Check the current listener.
2. Identify owner.
3. Determine project/service.
4. Determine runtime version/Git SHA where applicable.
5. Decide whether reuse, cleanup, or a new declared port is correct.

**Port hopping is not cleanup.**

## 5. Filesystem Discipline

Use declared locations for source repositories, runtime state, persistent data, logs, caches, downloads, temporary build artifacts, and evidence.

Do not scatter artifacts across the host.

Cleanup MUST distinguish persistent production data, active runtime state, logs/evidence, and disposable temporary artifacts. Persistent production data MUST NOT be deleted casually.

## 6. Process Discipline

Before killing a process:

- identify PID;
- identify command;
- identify project/service;
- identify port/resource ownership;
- determine whether it is production, construction, stale, or orphaned.

Never use broad process termination when a targeted action is possible.

## 7. Construction Isolation

Every temporary runtime requires:

**Project | Service | PID | Port | Git SHA | Purpose | Started | Cleanup Deadline | Cleanup Result**

**No cleanup result = not closed.**

## 8. Host Health Gate

Construction is **NOT PASS** if it leaves the host uncontrolled.

Minimum Host Health Gate:

- Canonical production sites remain reachable.
- No unexpected duplicate project runtimes.
- No unexplained high CPU/memory process.
- No unexplained port listeners.
- No runaway disk growth.
- No abandoned temporary runtime.
- No unmanaged tunnel/process.
- No critical service stopped unintentionally.
- Host resource state is acceptable after the task.

## 9. 5S Closure Checklist

- [ ] 整理 — unnecessary processes/artifacts removed
- [ ] 整顿 — ownership and locations are known
- [ ] 清扫 — stale runtime/cache/temp state cleaned
- [ ] 清洁 — logs/resources/lifecycle remain standardized
- [ ] 素养 — operator/agent followed construction rules
- [ ] Canonical ports verified
- [ ] Runtime identities verified
- [ ] Temporary ports released
- [ ] Temporary processes released
- [ ] Host health checked
- [ ] Evidence recorded

## 10. Hard Stop Conditions

Any of the following requires:

**HOST-5S-GATE = FAIL**

and construction must stop until resolved:

- unknown high-resource process;
- unknown port listener affecting the environment;
- duplicate unmanaged runtime;
- uncontrolled disk growth;
- production data mixed with disposable artifacts;
- temporary runtime left running without an approved exception;
- host instability caused by construction;
- inability to identify the owner of a critical process/resource.

## Core Rule

**Do not only make the site work. Make the host remain healthy after the work is done.**

A successful feature on a damaged host is not a successful construction.
