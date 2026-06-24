# 📁 GitHub Community Health Templates

This repository defines the **issue templates** and **pull request template** for the project. Templates are intentionally minimal — covering only the essential fields to lower the barrier for contributors while still giving maintainers what they need to act quickly.

All YAML templates conform to the [GitHub issue forms schema](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema).

---

## 📂 Structure

```
.github/
├── ISSUE_TEMPLATE/
│   ├── bug_report.yml        # 🐛 Bug report form        (5 fields, all required)
│   ├── feature_request.yml   # 🚀 Feature request form   (4 fields, 3 required)
│   └── config.yml            # Disables blank issues, adds browse link
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

All templates pass structural validation against the GitHub issue forms schema.

| File | Status | Fields | Last Validated |
|---|---|---|---|
| `bug_report.yml` | ✅ Pass | 5 fields · 5 required | 2026-06-24 |
| `feature_request.yml` | ✅ Pass | 4 fields · 3 required | 2026-06-24 |
| `config.yml` | ✅ Pass | — | 2026-06-24 |
| `PULL_REQUEST_TEMPLATE.md` | ✅ Pass | — | 2026-06-24 |