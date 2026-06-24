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

Used to report bugs. Trimmed from 13 → **5 fields**, all required — fast to fill, nothing skippable.

| Field | Type | Required |
|---|---|---|
| 🌍 Environment | Dropdown (DEV / TEST / UAT / PRD) | ✅ |
| 📝 What happened? | Textarea (expected vs. actual) | ✅ |
| 🔁 Steps to Reproduce | Textarea | ✅ |
| 🧩 Code / Error Output | Textarea (Python + traceback) | ✅ |
| 🛠️ Environment Info | Textarea (versions + OS) | ✅ |

---

## 🚀 Feature Request (`feature_request.yml`)

Used to suggest new features. Trimmed from 6 → **4 fields** — environment dropdown removed, context merged into alternatives.

| Field | Type | Required |
|---|---|---|
| 📝 What would you like? | Textarea | ✅ |
| 💡 Why is it needed? | Textarea | ✅ |
| 🛠️ Proposed Solution | Textarea (Python) | ✅ |
| 🔄 Alternatives or Additional Context | Textarea | — |

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

| File | Status | Fields | Notes |
|---|---|---|---|
| `bug_report.yml` | ✅ Valid | 5 (all required) | Streamlined from 13 fields |
| `feature_request.yml` | ✅ Valid | 4 (3 required) | Streamlined from 6 fields |
| `config.yml` | ✅ Valid | — | Correct `blank_issues_enabled` key |
| `PULL_REQUEST_TEMPLATE.md` | ✅ Valid | — | Well-formed Markdown |