# 📁 GitHub Community Health Templates

This repository defines the **issue templates** and **pull request template** for the project. Templates are intentionally minimal — covering only the essential fields to lower the barrier for contributors while still giving maintainers what they need to act quickly.

All YAML templates conform to the [GitHub issue forms schema](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema).

---

## 📂 Structure

```
Sabaoth-Cloud/.github (repo root)
├── .github/workflows/
│   ├── add-to-project.yml           # Reusable — adds labeled issues to project board
│   ├── add-to-project-on-issue.yml  # Caller for this repo's issues
│   └── validate.yml                 # CI — validates templates and workflows
├── workflow-templates/
│   ├── add-to-project-on-issue.yml       # Starter workflow for all org repos
│   └── add-to-project-on-issue.properties.json
├── ISSUE_TEMPLATE/
│   ├── bug_report.yml        # 🐛 Bug report form        (5 fields, all required)
│   ├── feature_request.yml   # 🚀 Feature request form   (4 fields, 3 required)
│   └── config.yml            # Disables blank issues, adds browse link
├── scripts/
│   └── validate.mjs          # Local validation script (also runs in CI)
├── PULL_REQUEST_TEMPLATE.md  # PR checklist (auto-loaded on new PRs)
└── README.md                 # This file
```

---

## 🐛 Bug Report

**File:** `ISSUE_TEMPLATE/bug_report.yml`
**Label applied:** `bug`

A focused form for reporting bugs — 5 fields, all required. No optional noise.

| # | Field | Type |
|---|---|---|
| 1 | 🌍 Environment | Dropdown — DEV / TEST / UAT / PRD |
| 2 | 📝 What happened? | Textarea — expected vs. actual behaviour |
| 3 | 🔁 Steps to Reproduce | Textarea — numbered steps |
| 4 | 🧩 Code / Error Output | Textarea — minimal snippet + traceback |
| 5 | 🛠️ Environment Info | Textarea — FastAPI, Python, OS versions |

---

## 🚀 Feature Request

**File:** `ISSUE_TEMPLATE/feature_request.yml`
**Label applied:** `enhancement`

A lean form for proposing new features — 4 fields, 3 required.

| # | Field | Type | Required |
|---|---|---|---|
| 1 | 📝 What would you like? | Textarea | ✅ |
| 2 | 💡 Why is it needed? | Textarea | ✅ |
| 3 | 🛠️ Proposed Solution | Textarea (Python rendered) | ✅ |
| 4 | 🔄 Alternatives or Additional Context | Textarea | — |

---

## ⚙️ Issue Template Config

**File:** `ISSUE_TEMPLATE/config.yml`

- Blank issues are **disabled** — all contributors must use a template.
- A **"Browse All Issues"** link is shown before opening a new issue to prevent duplicates.

---

## 🔀 Pull Request Template

**File:** `PULL_REQUEST_TEMPLATE.md`

Auto-loaded when opening any pull request. Sections:

| Section | Purpose |
|---|---|
| **Description** | Brief summary of what changed and why |
| **Type of change** | Bug fix / Feature / Breaking change / Docs / Refactor |
| **How has this been tested?** | Test cases or manual steps taken |
| **Checklist** | Self-review, docs, warnings, test coverage |
| **Related issues** | `Fixes #` / `Relates to #` links |

---

## 📋 Project board automation (org-wide)

Issues labeled `bug` or `enhancement` are added to the org project board at
`https://github.com/orgs/Sabaoth-Cloud/projects/1`.

### One-time org setup

1. Create an organization secret **`ADD_TO_PROJECT_PAT`** (PAT with `repo` and `project` scopes).
2. Set repository access to **All repositories** (or select repos that should use the board).

### Enable in each repository

GitHub cannot run workflows from this repo on issues opened in other repos automatically.
Each repository needs the caller workflow once:

1. Open the repo → **Actions** → **New workflow**
2. Choose **Add issues to project board** (from org starter workflows)
3. Click **Configure** → **Commit**

The starter workflow lives in `workflow-templates/add-to-project-on-issue.yml` and calls the
shared reusable workflow `Sabaoth-Cloud/.github/.github/workflows/add-to-project.yml@main`.

Issues filed in **this** `.github` repository are covered by `.github/workflows/add-to-project-on-issue.yml`.

---

## 🛠️ Usage

### Reporting a Bug or Requesting a Feature

1. Open the **Issues** tab → click **New issue**
2. Select a template:
   - **🐛 Bug Report** — unexpected behaviour, crashes, incorrect output
   - **🚀 Feature Request** — new ideas, enhancements, missing functionality
3. Complete all required fields and submit

### Opening a Pull Request

1. Push your branch and open a pull request
2. The PR template loads automatically
3. Fill in every section before requesting a review

---

## ✅ Validation Status

All templates and workflows pass structural validation. CI runs `node scripts/validate.mjs` and
actionlint on every push and pull request to `main`.

| File | Status | Detail | Last Validated |
|---|---|---|---|
| `ISSUE_TEMPLATE/bug_report.yml` | ✅ Pass | 5 fields · 5 required | 2026-06-24 |
| `ISSUE_TEMPLATE/feature_request.yml` | ✅ Pass | 4 fields · 3 required | 2026-06-24 |
| `ISSUE_TEMPLATE/config.yml` | ✅ Pass | blank issues disabled | 2026-06-24 |
| `PULL_REQUEST_TEMPLATE.md` | ✅ Pass | 5 sections present | 2026-06-24 |
| `.github/workflows/add-to-project.yml` | ✅ Pass | reusable workflow | 2026-06-24 |
| `.github/workflows/add-to-project-on-issue.yml` | ✅ Pass | local caller | 2026-06-24 |
| `.github/workflows/validate.yml` | ✅ Pass | CI validation workflow | 2026-06-24 |
| `workflow-templates/add-to-project-on-issue.yml` | ✅ Pass | org starter workflow | 2026-06-24 |
| `workflow-templates/add-to-project-on-issue.properties.json` | ✅ Pass | starter metadata | 2026-06-24 |

### Run validation locally

```bash
node scripts/validate.mjs
```