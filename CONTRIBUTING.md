# Contributing to Instatrim

Thanks for helping improve **Instatrim**! This guide explains how we work.

## TL;DR
1. Open/confirm an **Issue** describing the change.
2. Create a branch from `main`:  
   - `feature/<short-desc>` • `fix/<short-desc>` • `docs/<short-desc>` • `chore/<short-desc>`
3. Make small, focused commits using **Conventional Commits**.
4. Open a **Pull Request (PR)** that links the Issue and passes checks.

## Project Structure (top level)
- `mobile/` • `web/` • `backend/` • `docs/`
- `docs/FEATURES.md` (public features)  
- `docs/ROADMAP.md` (public roadmap)  
- `docs/internal/ROADMAP.md` (internal details)

## Branching
- `main` = stable.  
- Work on short-lived branches:  
  `feature/ai-captions`, `fix/export-preset-4k`, `docs/readme-tweaks`, `chore/ci-setup`.

## Commit Messages — Conventional Commits
Format: `type(scope): brief summary`

Common types: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `perf`, `build`, `ci`, `style`, `revert`

Examples:
- `feat(mobile): add trim tool skeleton`
- `fix(web): prevent crash on empty timeline`
- `docs: update features snapshot`

## Pull Requests
- Link the Issue (`Closes #123`).
- Describe **what** & **why**. Add screenshots if UI.
- Keep PRs focused (avoid unrelated changes).
- Update docs when behavior changes.
- Ensure builds/checks pass.

## Code Style (early guidelines)
- **Markdown** for docs.  
- Keep lines readable, use headings and lists. Emojis are welcome for clarity.  
- Code style/tooling for `mobile/web/backend` will be added with the first scaffolds.

## Code of Conduct
All contributors must follow our Code of Conduct (to be added next). Be respectful and inclusive.

## License
By contributing, you agree your contributions are licensed under the project’s **MIT License**.
