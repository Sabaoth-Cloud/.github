# Organization Default Health Files

This repository stores the organization's default community health files, GitHub issue templates, and sync workflow defaults. Any public or private repository in the organization that does not define its own `.github` files will automatically inherit these defaults.

## Purpose

- Provide a consistent default experience for issue reporting and pull requests.
- Ensure repositories without local `.github` templates still have mandatory ClickUp linkage and contribution guidance.
- Offer an organization-level fallback for repositories that do not maintain their own health files.

## Included Templates

* **Story** (`.github/ISSUE_TEMPLATE/story.yml`): Structured YAML form for sprint-sized implementation work that requires a ClickUp Strategic ID.
* **Task** (`.github/ISSUE_TEMPLATE/task.yml`): Structured YAML form for technical work tied to a parent GitHub Story and ClickUp ID.
* **Bug** (`.github/ISSUE_TEMPLATE/bug.yml`): Structured YAML form for defects with enforced priority and ClickUp ID linkage.
* **Pull Request Template** (`.github/PULL_REQUEST_TEMPLATE.md`): Default PR checklist and ClickUp ID confirmation section.

## ClickUp Sync Workflow

This repository also includes a default GitHub Action that reads branch names, PR titles, and PR bodies to extract a `CU-` ClickUp ID and update task status automatically.

* Workflow: `.github/workflows/clickup-sync.yml`
* Operation: sets status to `in review` on opened PRs and `done` on merged PRs.

## Overriding Templates

If a repository needs a custom workflow or different templates, create a `.github` folder inside that repository and add files with the same names. GitHub will use the repository-local versions instead of these org defaults.

## Maintenance

This repository is maintained by the organization administrators. If you have questions about these defaults or need changes, open an issue in the relevant repository or contact the org maintainers.