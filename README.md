# 📁 GitHub Community Health Templates

This repository contains the **issue templates** and **pull request template** used across the project. All YAML templates follow the [GitHub issue forms schema](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema).

---

## 📂 Structure

```
.github/
├── ISSUE_TEMPLATE/
│   ├── bug_report.yml        # 🐛 Bug report form (13 fields, 8 required)
│   ├── feature_request.yml   # 🚀 Feature request form (6 fields, 4 required)
│   └── config.yml            # Issue template configuration (blank issues disabled)
├── PULL_REQUEST_TEMPLATE.md  # Pull request checklist template
└── README.md                 # This file
```

---

## 🐛 Bug Report (`bug_report.yml`)

Used to report bugs. Opens a structured form with the following fields:

| Field | Type | Required |
|---|---|---|
| 🌍 Environment | Dropdown (DEV / TEST / UAT / PRD) | ✅ |
| 📝 Bug Description | Textarea | ✅ |
| 🔁 Steps to Reproduce | Textarea | ✅ |
| ✅ Expected Behavior | Textarea | ✅ |
| ❌ Actual Behavior | Textarea | ✅ |
| 🧩 Minimal Reproducible Example | Textarea (Python) | — |
| ⚡ FastAPI Version | Input | ✅ |
| 🐍 Python Version | Input | ✅ |
| 💻 Operating System | Input | ✅ |
| 🔷 Pydantic Version | Input | — |
| 🦄 Uvicorn / Starlette Version | Input | — |
| 🔴 Error Output / Traceback | Textarea (shell) | — |
| 💬 Additional Context | Textarea | — |

---

## 🚀 Feature Request (`feature_request.yml`)

Used to suggest new features or enhancements. Opens a structured form with the following fields:

| Field | Type | Required |
|---|---|---|
| 🌍 Target Environment | Dropdown (DEV / TEST / UAT / PRD / All) | ✅ |
| 📝 Summary | Textarea | ✅ |
| 💡 Motivation / Use Case | Textarea | ✅ |
| 🛠️ Proposed Solution | Textarea (Python) | ✅ |
| 🔄 Alternatives Considered | Textarea | — |
| 💬 Additional Context | Textarea | — |

---

## ⚙️ Issue Template Config (`config.yml`)

- **Blank issues are disabled** — contributors must use one of the templates above.
- A link to browse existing issues is shown before creating a new one to avoid duplicates.

---

## 🔀 Pull Request Template (`PULL_REQUEST_TEMPLATE.md`)

Automatically loaded when opening a pull request. Includes:

- **Description** — brief summary of changes
- **Type of change** — Bug fix / New feature / Breaking change / Docs / Refactoring
- **Testing details** — how the change was tested
- **Checklist** — self-review, documentation, warnings, tests
- **Related issues** — links to fixed or related issues

---

## 🛠️ Usage

### Creating an Issue

1. Go to the **Issues** tab in the GitHub repository
2. Click **New issue**
3. Choose a template:
   - **🐛 Bug Report** — for reporting unexpected behaviour
   - **🚀 Feature Request** — for suggesting new features or enhancements
4. Fill out all required fields and submit

### Creating a Pull Request

1. Push your changes to a branch
2. Open a pull request against the target branch
3. The PR template loads automatically — fill in all sections before requesting review

---

## ✅ Template Validation

All templates have been validated against the GitHub issue forms schema:

| File | Status | Notes |
|---|---|---|
| `bug_report.yml` | ✅ Valid | No duplicate IDs, all types supported |
| `feature_request.yml` | ✅ Valid | No duplicate IDs, all types supported |
| `config.yml` | ✅ Valid | Correct `blank_issues_enabled` key |
| `PULL_REQUEST_TEMPLATE.md` | ✅ Valid | Well-formed Markdown |