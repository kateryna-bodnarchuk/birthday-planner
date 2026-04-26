# Data Model — Birthday Planner

This document describes the initial data model for the birthday-planner project.

Entities

- Guest
  - id (number)
  - name (string)
  - email (string)
  - rsvp (enum: yes/no/maybe)
  - plusOne (boolean)
  - notes (string)

- Task
  - id (number)
  - title (string)
  - description (string)
  - assignedTo (guest id)
  - dueDate (ISO date string)
  - completed (boolean)

- BudgetItem
  - id (number)
  - description (string)
  - amount (number)
  - category (string)

- Event
  - id (number)
  - date (ISO date string)
  - venue (string)
  - schedule (array of {time, activity})

Next steps
- Replace in-memory stores with a lightweight database (SQLite/Postgres).
- Add validation and basic tests for models and API endpoints.
