#!/usr/bin/env node

/*!
 * Installer script for MT-Nemo-Actions
 */

/*globals process*/
'use strict';

var path = require('path');
var shelljs = require('shelljs');

var target = path.join(process.env.HOME, '.local/share/nemo/actions');

if (!shelljs.test('-d', target)) {
  console.error('It seems that Nemo is not installed on this system.');
  process.exit(1);
}

if (!shelljs.test('-d', 'actions')) {
  console.error('Unable to find source actions folder.');
  process.exit(1);
}

console.log('Installing actions. Please wait...');

shelljs.ls('actions/*.js', 'actions/*.nemo_action')
  .map(function(action){
    return path.resolve(action);
  })
  .forEach(function(action){
    var targetAction = path.resolve(target, path.basename(action));
    shelljs.ln('-s', action, targetAction);
  });

console.log('done');
