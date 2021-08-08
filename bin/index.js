#!/usr/bin/env node

const core = require("@ssd-cli/core");

try {
  core.init();
} catch (err) {
  console.log(err);
}
