#! /usr/bin/env node
import figlet from "figlet";
import { Command } from "commander"; // add this line
//add the following line
// const program = new Command();

console.log(figlet.textSync("Dir Manager"));

// program
//   .version("1.0.0")
//   .description("An example CLI for managing a directory")
//   .option("-l, --ls  [value]", "List directory contents")
//   .option("-m, --mkdir <value>", "Create a directory")
//   .option("-t, --touch <value>", "Create a file")
//   .parse(process.argv);

// const options = program.opts();