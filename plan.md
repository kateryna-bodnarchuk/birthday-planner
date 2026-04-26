Project: birthday planner

Problem statement
- Build a small, public project to plan and manage a birthday party. Provide tools for guest lists, tasks, budget, venue, schedule, and automatic grammar checks for user-entered text.

Approach
- Start with a minimal, well-documented repository containing a README, issue templates, and a simple web app.
- Phased implementation: project setup -> design & data model -> backend API -> frontend UI -> CI & grammar automation -> docs & launch.
- Keep choices flexible: can be a static site (React/Next.js) with a lightweight Node API and optional GitHub integration.

Key files/components to create
- README.md: overview & getting started
- src/backend/: Node/Express API for guests, tasks, budget
- src/frontend/: React app for UI
- .github/issue_template/: issue templates
- workflows/: GitHub Actions for CI (lint/test) and optional auto-grammar check on PRs
- docs/: usage and contribution guide

Todos (high-level)
- project-setup: Create repository skeleton, README, license, issue templates
- github-repo: Create GitHub repo and connect remote (optional)
- design-data-model: Define data model for guests, tasks, budget, schedule
- implement-backend: Implement API endpoints and basic tests
- implement-frontend: Build UI for managing lists and tasks
- grammar-integration: Add grammar checking (pre-commit hook or GitHub Action)
- ci-cd: Add CI for tests and linting
- docs: Finalize README and contribution guidelines
- launch: Tag release and announce

Notes
- Grammar checking options: integrate LanguageTool or an AI grammar-check action; ask whether to run automatically on commit/PR.
- Need GitHub auth permission to create repos; if declined, repo will be local only.

Questions
- Should the project repository be created on GitHub and connected to your account? (Yes/No)
