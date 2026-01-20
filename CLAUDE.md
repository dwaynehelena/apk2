# Claude Code Workflow & Context Recovery

## Core Philosophy
The AI implements autonomously but remains accountable—every action is logged to issue trackers and Git for full traceability.

## Automation Spectrum
- **Implementation**: Fully autonomous
- **Testing**: AI writes & runs
- **Context Recovery**: Fully autonomous via state files

## Skills Pipeline
- `/dev.specify`: Create feature specification (spec.md)
- `/dev.plan`: Generate architecture plan (plan.md)
- `/dev.tasks`: Break down into implementable tasks (tasks.md)
- `/dev.implement-epic`: Implement tasks autonomously

## Commands available
- `./scripts/validate.sh`: Run validation suite (tests, typecheck)
- `./scripts/session-recover`: Recover context from state file
- `./scripts/save-epic-checkpoint`: Save current state

## Recovery Protocol
After compaction or session restart:
1. Run `./scripts/session-recover` to check for active epic.
2. If active epic exists, READ `spec.md`, `plan.md`, `tasks.md`.
3. Resume implementation of the next task.
