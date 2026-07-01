# Organization Default Health Files

This repository stores the organization's default community health files and GitHub fallback templates. Any public or private repository in the organization that does not define its own `.github` files will automatically inherit these defaults.

## Purpose

- Provide a consistent default experience for issue reporting and pull requests.
- Ensure repositories without local `.github` templates still have basic contribution guidance.
- Offer an organization-level fallback for repositories that do not maintain their own health files.

## Included Templates

* **Bug Report** (`.github/ISSUE_TEMPLATE/bug_report.yml`): Structured YAML form for reporting bugs.
* **Feature Request** (`.github/ISSUE_TEMPLATE/feature_request.yml`): Structured YAML form for suggesting improvements.
* **Pull Request Template** (`.github/PULL_REQUEST_TEMPLATE.md`): Default checklist for PR submissions.

## Overriding Templates

If a repository needs a custom workflow, create a `.github` folder inside that repository and add files with the same names. GitHub will use the repository-local versions instead of these org defaults.

## Maintenance

This repository is maintained by the organization administrators. If you have questions about these defaults or need changes, open an issue in the relevant repository or contact the org maintainers.