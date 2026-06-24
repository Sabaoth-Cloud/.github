import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const results = [];
let failed = false;

function pass(file, detail) {
  results.push({ file, status: "PASS", detail });
}

function fail(file, detail) {
  results.push({ file, status: "FAIL", detail });
  failed = true;
}

function read(file) {
  return fs.readFileSync(path.join(root, file), "utf8");
}

function walk(dir, ext) {
  const full = path.join(root, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(ext))
    .map((f) => path.join(dir, f).replace(/\\/g, "/"));
}

function validateWorkflow(file, content) {
  const errors = [];
  if (content.includes("\t")) errors.push("contains tab characters");
  if (!/^name:\s*.+/m.test(content)) errors.push("missing name");
  if (!/^on:\s*$/m.test(content)) errors.push("missing on block");
  if (!/^jobs:\s*$/m.test(content)) errors.push("missing jobs block");
  if (
    content.includes("secrets.ADD_TO_PROJECT_PAT") &&
    file === ".github/workflows/add-to-project.yml" &&
    !/ADD_TO_PROJECT_PAT:/.test(content)
  ) {
    errors.push("reusable workflow must define ADD_TO_PROJECT_PAT secret");
  }
  const exprs = content.match(/\$\{\{[^}]*\}\}/g) || [];
  for (const e of exprs) {
    if (!e.endsWith("}}")) errors.push("malformed expression: " + e);
  }
  if (file.includes("workflow-templates")) {
    if (!content.includes("Sabaoth-Cloud/.github/.github/workflows/add-to-project.yml@main")) {
      errors.push("workflow template must reference org reusable workflow");
    }
  }
  if (file === ".github/workflows/add-to-project-on-issue.yml") {
    if (!content.includes("./.github/workflows/add-to-project.yml")) {
      errors.push("local caller must reference ./.github/workflows/add-to-project.yml");
    }
  }
  if (file === ".github/workflows/add-to-project.yml") {
    if (!/workflow_call:/.test(content)) errors.push("reusable workflow must use workflow_call");
    if (!/actions\/add-to-project@v2/.test(content)) errors.push("missing add-to-project action");
  }
  if (errors.length) fail(file, errors.join("; "));
  else pass(file, "workflow structure valid");
}

function validateIssueTemplate(file, content) {
  const errors = [];
  if (!/^name:\s*.+/m.test(content)) errors.push("missing name");
  if (!/^description:\s*.+/m.test(content)) errors.push("missing description");
  if (!/^body:\s*$/m.test(content)) errors.push("missing body block");
  const ids = [...content.matchAll(/^    id:\s*(.+)$/gm)].map((m) => m[1].trim());
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dupes.length) {
    errors.push("duplicate field ids: " + [...new Set(dupes)].join(", "));
  }

  const bodyTypes = [...content.matchAll(/^  - type:\s*(\w+)/gm)].map((m) => m[1]);
  const allowed = new Set(["markdown", "textarea", "dropdown", "input", "checkboxes"]);
  for (const t of bodyTypes) {
    if (!allowed.has(t)) errors.push("unsupported body type: " + t);
  }

  const requiredCount = (content.match(/required:\s*true/g) || []).length;
  if (file.endsWith("bug_report.yml") && requiredCount !== 5) {
    errors.push("expected 5 required fields, found " + requiredCount);
  }
  if (file.endsWith("feature_request.yml") && requiredCount !== 3) {
    errors.push("expected 3 required fields, found " + requiredCount);
  }

  if (errors.length) fail(file, errors.join("; "));
  else {
    const fields = bodyTypes.filter((t) => t !== "markdown").length;
    pass(file, fields + " fields · " + requiredCount + " required");
  }
}

function validateConfig(file, content) {
  const errors = [];
  if (!/blank_issues_enabled:\s*false/.test(content)) {
    errors.push("blank_issues_enabled should be false");
  }
  if (!/contact_links:/.test(content)) errors.push("missing contact_links");
  if (errors.length) fail(file, errors.join("; "));
  else pass(file, "config valid");
}

function validateProperties(file, content) {
  const errors = [];
  try {
    const data = JSON.parse(content);
    for (const key of ["name", "description", "iconName", "categories"]) {
      if (!data[key]) errors.push("missing " + key);
    }
    if (data.categories && !Array.isArray(data.categories)) {
      errors.push("categories must be an array");
    }
  } catch (e) {
    errors.push("invalid JSON: " + e.message);
  }
  if (errors.length) fail(file, errors.join("; "));
  else pass(file, "properties valid");
}

function validatePrTemplate(file, content) {
  const sections = [
    "Description",
    "Type of change",
    "How has this been tested?",
    "Checklist",
    "Related issues",
  ];
  const missing = sections.filter((s) => !content.includes(s));
  if (missing.length) fail(file, "missing sections: " + missing.join(", "));
  else pass(file, sections.length + " sections present");
}

for (const file of walk(".github/workflows", ".yml")) validateWorkflow(file, read(file));
for (const file of walk("workflow-templates", ".yml")) validateWorkflow(file, read(file));
for (const file of walk("ISSUE_TEMPLATE", ".yml")) {
  if (file.endsWith("config.yml")) validateConfig(file, read(file));
  else validateIssueTemplate(file, read(file));
}
validateProperties(
  "workflow-templates/add-to-project-on-issue.properties.json",
  read("workflow-templates/add-to-project-on-issue.properties.json"),
);
validatePrTemplate("PULL_REQUEST_TEMPLATE.md", read("PULL_REQUEST_TEMPLATE.md"));

console.log("Validation Results");
console.log("==================");
for (const r of results) {
  const icon = r.status === "PASS" ? "PASS" : "FAIL";
  console.log(icon + " " + r.file + " — " + r.detail);
}
console.log("==================");
console.log(failed ? "OVERALL: FAIL" : "OVERALL: PASS");
process.exit(failed ? 1 : 0);
