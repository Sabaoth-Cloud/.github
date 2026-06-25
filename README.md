# GitHub Templates

Shared GitHub community health files for software projects.

## Overview

This repository provides reusable GitHub templates including issue templates, pull request templates, and workflow configurations. Use these templates to standardize contributions across any software project.

## Contents

- **ISSUE_TEMPLATE/** - Bug report and feature request templates
- **PULL_REQUEST_TEMPLATE.md** - Standardized pull request template
- **.github/workflows/** - Reusable workflow templates for GitHub Actions
- **workflow-templates/** - Organization-wide workflow template configurations
- **scripts/validate.mjs** - Validation script for template files

## Validation

Run the validation script to check template integrity:

```bash
node scripts/validate.mjs
```

The validator checks:
- Workflow syntax and required fields
- Issue template structure and required fields count
- PR template section completeness
- Properties file schema validation

## Usage

Copy templates to your repository's `.github/` directory:

```bash
# Copy issue templates
cp -r ISSUE_TEMPLATE/ /path/to/your-project/.github/

# Copy PR template
cp PULL_REQUEST_TEMPLATE.md /path/to/your-project/.github/

# Copy workflows
cp .github/workflows/*.yml /path/to/your-project/.github/workflows/
```

Or use as a git submodule for automatic updates:

```bash
git submodule add https://github.com/your-org/.github external/.github-templates
```

## License

MIT License - feel free to adapt these templates for your own projects.