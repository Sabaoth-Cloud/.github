# Sabaoth-Cloud Organization Defaults

This repository defines the default GitHub settings inherited by Sabaoth-Cloud repositories.

Included defaults:
- issue templates
- pull request template
- contribution guide
- workflow templates

If a repository does not define its own copy, GitHub uses these defaults automatically.

## Important
- This repository must remain public; GitHub only applies org defaults while it is public.
- Do not commit secrets, private repo names, or internal URLs.
- Workflow logic is not stored here. The actual automation lives in the private `Sabaoth-Cloud/org-workflows` repository.
- The `ClickUp Task Status Sync` workflow template can be enabled per repository from Actions → New workflow.

## Layout

```text
.github/
  ISSUE_TEMPLATE/
  CONTRIBUTING.md
  PULL_REQUEST_TEMPLATE.md
  README.md
workflow-templates/
```

Changes merged to `main` here apply to inheriting repositories immediately.
