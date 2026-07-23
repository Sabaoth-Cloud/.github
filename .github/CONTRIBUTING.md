# Contributing to Our Engineering Workflow

We use a hybrid approach to manage our operations. By following these rules, you keep our cross-platform synchronization (ClickUp + GitHub) healthy.

## 1. Strategic vs. Execution
- **ClickUp:** Holds Strategic Directives (Initiatives & Epics). This is the source of truth for "Why" and "What."
- **GitHub:** Holds Execution Directives (Stories, Tasks, Bugs). This is the source of truth for "How."

## 2. The Workflow
1. **Always link your work:** Every GitHub issue you create MUST reference a ClickUp Strategic ID.
2. **Automated Sync:** When you open a PR containing a `CU-ID`, the status in ClickUp will move to "In Review." When you merge, it will move to "Done."
3. **Naming Convention:** 
   - Branches: `feature/CU-[ID]-short-desc`
   - PR Titles: `[CU-[ID]] Short Description`

## 3. Pull Requests
- Keep PRs small.
- Ensure all CI/CD checks pass.
- Include a summary and the ClickUp ID in the PR body.

## 4. Security
- Never commit secrets.
- All code changes are subject to security review by the engineering leads.
