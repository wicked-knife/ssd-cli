#!/usr/bin/env node
const lib = require('ssd-cli-lib')

const [command, option, param] = process.argv.slice(2)

if(command) {
  if(lib[command]) {
    lib[command]({option, param})
  } else {
    console.log('命令不存在');
  }
}