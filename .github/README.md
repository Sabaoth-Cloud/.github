# Sabaoth-Cloud Organization Defaults

This public repository holds the default issue templates, pull request template, contribution guide, and workflow templates for every repository in the Sabaoth-Cloud organization.

GitHub applies these defaults automatically to any repository in the organization that does not define its own versions. GitHub only does this while this repository is **public**, so it must stay public — and nothing private belongs in it (see [Keeping this repository public-safe](#keeping-this-repository-public-safe)).

## What repositories inherit automatically

| File | Purpose |
| --- | --- |
| `.github/ISSUE_TEMPLATE/story.yml` | **Story** — sprint-sized implementation work. Requires a ClickUp Strategic ID. |
| `.github/ISSUE_TEMPLATE/task.yml` | **Task** — technical work tied to a parent GitHub Story and a ClickUp ID. |
| `.github/ISSUE_TEMPLATE/bug.yml` | **Bug** — defects, with enforced priority and a ClickUp ID. |
| `.github/PULL_REQUEST_TEMPLATE.md` | PR checklist and ClickUp ID confirmation. |
| `.github/CONTRIBUTING.md` | How GitHub and ClickUp work together, branch and PR naming, and review rules. |

Changes merged to `main` here take effect in every inheriting repository immediately; no per-repository update is needed.

## Workflows

GitHub does **not** inherit workflows from this repository. Workflow logic lives in the private `Sabaoth-Cloud/org-workflows` repository, and this repository only publishes templates that call it.

### ClickUp Task Status Sync (opt in per repository)

Moves the linked ClickUp task to **In Review** when a PR opens and to **Done** when it merges. The ClickUp ID is read from the branch name, PR title, or PR body (`CU-<id>`).

To enable it in a repository: **Actions → New workflow → "ClickUp Task Status Sync" → Configure**, then commit the file. The template is [`workflow-templates/clickup-sync.yml`](../workflow-templates/clickup-sync.yml).

Only private repositories can use it, because it calls a workflow in a private repository.

### Organization-wide automations (nothing to set up)

Some automations, such as adding new issues to the organization project board, run on a schedule from `org-workflows` and cover every repository without any per-repository setup.

## Overriding the defaults

A repository can replace any default by adding its own file with the same name under its own `.github` folder.

Issue templates are all-or-nothing: if a repository has **any** file in its own `.github/ISSUE_TEMPLATE` folder, none of the organization issue templates appear there.

## Keeping this repository public-safe

Everything here, including its git history and any Actions logs, is visible to anyone.

- **No secrets or credentials**, not even in examples.
- **No workflows under `.github/workflows/`.** Run logs of a public repository are visible to anyone with a GitHub account and can leak private repository names, issue links, or other data. Add new automation to `org-workflows` and, if repositories need to opt in, publish a caller template in `workflow-templates/`.
- **No internal details** such as private repository names, project IDs, infrastructure names, or internal URLs.

## Repository layout

```text
.github/
  ISSUE_TEMPLATE/         Issue forms inherited by every repository
  CONTRIBUTING.md         Inherited contribution guide
  PULL_REQUEST_TEMPLATE.md
  README.md               This file
workflow-templates/       Caller templates shown under "Actions → New workflow"
```

## Maintenance

Maintained by the organization administrators. To propose a change, open a pull request against this repository or contact the org maintainers.
