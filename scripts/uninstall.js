#!/usr/bin/env node

/*globals process*/
'use strict';

/*!
 * Uninstaller for MT-Nemo-Actions
 */

var path = require('path');
var shelljs = require('shelljs');

var target = path.resolve(process.env.HOME, '.local/share/nemo/actions');

if (!shelljs.test('-d', target)) {
  console.error('It seems that Nemo is not installed on this system.');
  process.exit(1);
}

console.log('Uninstall Nemo Actions. Please wait...');

shelljs.ls('actions/*.js', 'actions/*.nemo_action')
  .map(function(action) {
    return path.resolve(target, path.basename(action));
  })
  .forEach(function(action) {
    if (shelljs.test('-L', action)) {
      shelljs.rm(action);
    }
  });

console.log('done');
