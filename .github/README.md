# Organization Default Health Files

This `.github` repository contains the default community health files for our organization. 

Files placed in this repository are automatically used as fallbacks by GitHub for all public and private repositories within our organization that do not have their own specific files configured.

## Included Templates

* **Bug Report** (`.github/ISSUE_TEMPLATE/bug_report.yml`): Structured YAML form for reporting bugs.
* **Feature Request** (`.github/ISSUE_TEMPLATE/feature_request.yml`): Structured YAML form for feature ideation.
* **Pull Request Template** (`.github/PULL_REQUEST_TEMPLATE.md`): Default checklist for PR submissions.

## Overriding Templates
If a specific repository requires a unique workflow, you can override these defaults by creating a `.github` folder within that specific repository and placing a file with the exact same name inside it.