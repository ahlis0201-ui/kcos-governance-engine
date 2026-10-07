# KCOS Project Entry Rules

## Factory Local Worker Non-Stop Baseline — MANDATORY
## Factory Local Worker Non-Stop Baseline — MANDATORY

This repository follows `LOCAL-WORKER-BASELINE-001` from `cdi-foundation`. A blocked action MUST NOT stop the repository production flow. Classify the blocker, checkpoint the commit/state, isolate the affected work item, scan for independent READY work, continue what can proceed, and emit a resumable blocker when nothing remains. Valid local commits MUST be pushed before blocking when the remote path is healthy. Do not silently stop, discard valid work, or wait indefinitely.
