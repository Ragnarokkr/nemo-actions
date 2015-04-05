#!/usr/bin/env node

/*!
 * Nemo Actions
 * Copyright (c)2015, Marco Trulla (dev@marcotrulla.it)
 * Licensed under MIT License
 */

/*
 * MTNA-Folders-TemplateCreator
 * Create the specified directories inside the passed working folder.
 */

/*
 * -t, --target = working directory
 * anything else = template folders
 */

/*globals process*/
'use strict';

var path = require('path');
var shell = require('shelljs');
var yargs = require('yargs')
  .usage('Usage: $0 -t|--target TARGET FOLDERS...')
  .example('$0 -t . folder1 folder2 folder3')
  .option('t', {
    alias: 'target',
    demand: true,
    describe: 'Target folder',
    type: 'string'
  })
  .help('h').alias('h', 'help')
  .showHelpOnFail(true, 'Specify --help for available options.')
  .epilog('Part of MT-Nemo-Actions. Copyright (c)2015, Marco Trulla. Licensed under MIT License.');

var argv = require('yargs').argv;

function templateCreator(targetFolder, templateFolders) {
  if (!shell.test('-d', targetFolder)) {
    console.error('Target folder is not a directory.');
    yargs.showHelp();
    process.exit(1);
  }

  if (!templateFolders.length) {
    console.error('At least one template folder must be specified.');
    yargs.showHelp();
    process.exit(1);
  }

  shell.mkdir(templateFolders.map(function(folder){
    return path.resolve(targetFolder, folder);
  }));
}

function main() {
  templateCreator(argv.t, argv._);
}

main();
