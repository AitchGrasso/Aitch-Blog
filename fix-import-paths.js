const fs = require("fs");
const path = require("path");

const directory = "./src";
const targetPattern = /(['"])@\/src\/(.*?)(['"])/g;

function walk(dir, fileCallback) {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, fileCallback);
    } else if (/\.(js|jsx|ts|tsx)$/.test(fullPath)) {
      fileCallback(fullPath);
    }
  });
}

function fixImports(file) {
  let content = fs.readFileSync(file, "utf-8");
  const updated = content.replace(targetPattern, (_match, quoteStart, importPath, quoteEnd) => {
    return `${quoteStart}@/${importPath}${quoteEnd}`;
  });

  if (content !== updated) {
    fs.writeFileSync(file, updated, "utf-8");
    console.log(`✅ Fixed: ${file}`);
  }
}

walk(directory, fixImports);