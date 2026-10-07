# REPOSITORY-END-STATE-001 — Repository Lifecycle Endpoint

Status: ACTIVE / FACTORY STANDARD INSTANCE

## Lifecycle
IDENTIFY -> CLASSIFY -> SPECIFY -> CONSTRUCT -> VERIFY -> RELEASE -> OPERATE -> MAINTAIN -> RETIRE

## Development endpoint
DEVELOPMENT_COMPLETE = declared identity and scope, SSOT/contracts, artifact classification, required Gates/evidence, reproducible release artifact, documentation/runbook, ownership and remote proof complete.

## Release endpoint
RELEASE_READY = frozen accepted baseline has a declared release artifact and release evidence.

## Operations endpoint
OPERATIONS_READY = released baseline has explicit ownership, observability, recovery/rollback, dependency/security ownership, and retrievable evidence.

## Maintenance boundary
Operations does not silently reopen product development. New capabilities require a new controlled development scope.

## Handover endpoint
HANDOVER_READY = ownership, runbook, dependencies, credentials/secrets responsibility, monitoring, recovery and evidence transferred and acknowledged.

## Retirement endpoint
RETIRED = traffic/jobs disabled or migrated, dependencies/data/credentials dispositioned, final evidence retained, and ownership closed.

## Unknown state
UNKNOWN/ABNORMAL = any lifecycle state without required evidence or an explicit blocker/resume condition.

SSOT: CDI Foundation production/FACTORY-REPOSITORY-CONVERGENCE-001.md
Factory recovery: CDI Foundation contracts/FLOW-CONTROL-002.md
