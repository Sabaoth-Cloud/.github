# Organization Default Health Files

This public repository stores the organization's default community health files, GitHub issue templates, and workflow templates. Any public or private repository in the organization that does not define its own `.github` files will automatically inherit these defaults. Nothing sensitive belongs here: workflow logic lives in the private `Sabaoth-Cloud/org-workflows` repository.

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

Workflows are not inherited from this repository; each repository opts in with a small caller workflow. The sync logic is a reusable workflow in the private `Sabaoth-Cloud/org-workflows` repository. It reads branch names, PR titles, and PR bodies to extract a `CU-` ClickUp ID and update task status automatically.

* Add it to a repository: **Actions → New workflow → "ClickUp Task Status Sync"** (template: `workflow-templates/clickup-sync.yml`).
* Operation: sets status to `in review` on opened PRs and `done` on merged PRs.
* Requires the org secret `CLICKUP_API_TOKEN`. Only private repositories can call the private reusable workflow.

## Overriding Templates

If a repository needs different templates, create a `.github` folder inside that repository and add files with the same names. GitHub will use the repository-local versions instead of these org defaults. If a repository has any file in its own `.github/ISSUE_TEMPLATE` folder, none of the org issue templates are used there.

## Maintenance

This repository is maintained by the organization administrators. If you have questions about these defaults or need changes, open an issue in the relevant repository or contact the org maintainers.