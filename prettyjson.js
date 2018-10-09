#!/usr/bin/env node

if (typeof process.argv[2] === 'undefined') {
  console.log(`USAGE: ${process.argv[1]} FILE...`);
  process.exit(1);
}

const fs = require('fs');

let errors = false;
for (let i = 2; i < process.argv.length; i++) {
  const path = process.argv[i];

  let json = fs.readFileSync(path);
  
  try {
    json = JSON.parse(json);
  } catch (e) {
    console.error("Invalid JSON:", e);
    errors = true;
    continue;
  }
  
  json = JSON.stringify(json, null, 2);
  json = json.trim() + "\n";
  fs.writeFileSync(path, json);
}

if (errors) {
  process.exit(2);
}
