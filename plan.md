1. Project: birthday planner

Problem statement
- Build a small, public project to plan and manage a birthday party. Provide tools for guest lists, tasks, budget, venue, schedule, and automatic grammar checks for user-entered text.

Approach
- Start with a minimal, well-documented repository containing a README, issue templates, and a simple web app.
- Phased implementation: project setup -> design & data model -> backend API -> frontend UI -> CI & grammar automation -> docs & launch.
- Keep choices flexible: static site (simple HTML/React) with a lightweight Node API and GitHub integration.

Key files/components to create
- README.md: overview & getting started
- src/backend/: TypeScript Node/Express API for guests, tasks, budget
- src/frontend/: lightweight UI (static HTML initially, later React)
- .github/issue_template/: issue templates
- .github/workflows/: GitHub Actions for CI (lint/test) and grammar checks
- docs/: usage and contribution guide

Progress to date
- Repository created on GitHub and pushed: https://github.com/kateryna-bodnarchuk/birthday-planner
- plan.md saved in session-state and added to repo
- Design & data model documented (docs/data-model.md)
- Backend skeleton added and converted to TypeScript (src/backend/src)
- Basic validators and simple tests added
- CI workflow (GitHub Actions) added to run build and tests
- Simple static frontend (src/frontend/index.html) created and backend updated to serve it
- Backend dependencies installed locally; server-start attempts made (may need local env to run)

Next steps
- Finalize backend: ensure server runs reliably, add unit tests and API validation, replace in-memory stores with a lightweight DB if desired (SQLite)
- Implement frontend SPA (React or plain JS) for guest/task management and form validation
- Add grammar integration: GitHub Action or pre-commit hook (LanguageTool or AI grammar checker)
- Improve CI: linting, test coverage, and PR checks
- Finalize docs, license, contribution guide, then tag release and announce

Todos (current status tracked in session DB)
- project-setup: done
- github-repo: done
- design-data-model: done
- implement-backend: in_progress
- implement-frontend: pending
- grammar-integration: pending
- ci-cd: pending (workflow added)
- docs: pending
- launch: pending

Notes
- Running locally requires Node.js & npm. I installed Node here and ran installs; please run server locally with:
  cd C:\Users\kater\Projects\birthday-planner
  node src\backend\server.js
  then open http://localhost:3000/
- For automatic grammar checks, confirm whether to use LanguageTool or an AI-based action.

Questions
- Prefer React for frontend or keep lightweight static UI for MVP? (Reply when available)
