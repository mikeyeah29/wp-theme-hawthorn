# Development Guidelines

## General approach

This is a practical WordPress project maintained by a small development team.

Prefer simple, readable solutions over elaborate architecture.

Do not over-engineer.

## Scope

Only implement what has been requested.

Do not:
- refactor unrelated code
- introduce new abstractions unless they solve an immediate problem
- create extra classes/services/helpers for hypothetical future requirements
- add dependencies unless clearly necessary
- redesign existing architecture without being asked
- add functionality "while you're here"

Prefer modifying existing code over introducing new architecture when practical.

## WordPress

Follow existing project conventions.

Prefer standard WordPress APIs and patterns over custom abstractions.

For small features, a small class is acceptable.
Do not introduce enterprise-style architecture unless the complexity genuinely requires it.

## Implementation

Choose the simplest solution that satisfies the requirement.

Before adding a new abstraction, ask:
"Does the current requirement actually need this?"

If not, don't add it.

Keep the diff focused and as small as reasonably possible.

## Existing code

Match the style and architecture already present in the project.

Do not "improve" existing code unless doing so is necessary for the requested change.

## Validation

Test the behaviour affected by the change.

Do not create an extensive new testing infrastructure solely for a small change unless requested.