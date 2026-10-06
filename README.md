# Sabaoth-Cloud Organization Defaults

This repository holds the default files used by Sabaoth-Cloud repositories.

Inherited automatically by any repository that does not define its own copy:
- issue templates (Story, Task, Bug)
- pull request template
- contribution guide

Issue templates are all-or-nothing: if a repository has any file in its own `.github/ISSUE_TEMPLATE` folder, none of these appear there.

Workflow templates are not inherited. They appear as options under Actions → New workflow in every repository.

## Important
- This repository must remain public; GitHub only applies org defaults while it is public.
- Do not commit secrets, private repo names, or internal URLs.
- Do not add workflows under `.github/workflows/`. Actions logs of a public repository are visible to anyone with a GitHub account.
- Workflow logic is not stored here. The actual automation lives in the private `Sabaoth-Cloud/org-workflows` repository.
- The `ClickUp Task Status Sync` workflow template can be enabled per repository from Actions → New workflow. It only works in private repositories, because it calls a workflow in a private repository.

## Layout

```text
.github/
  ISSUE_TEMPLATE/
  CONTRIBUTING.md
  PULL_REQUEST_TEMPLATE.md
workflow-templates/
README.md
```

Changes merged to `main` here apply to inheriting repositories immediately.
