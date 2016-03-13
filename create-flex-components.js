/* eslint-disable no-console, strict */
'use strict';

const path = require('path');
const fs = require('fs-extra');
const s = require('underscore.string');

const createFlexSccsContent = (component) =>
`$global-flexbox: true;

@import '../${component}/styles';
`;
const FLEX_COMPONENTS = [
  'button-group',
  'forms',
  'media-object',
  'menu',
  'title-bar',
  'top-bar',
];

FLEX_COMPONENTS.forEach((component) => {
  const directoryPath = path.join(__dirname, 'lib', component);
  const indexPath = path.join(directoryPath, 'index.js');
  const scssPath = path.join(directoryPath, '_styles.scss');

  try {
    fs.accessSync(indexPath, fs.F_OK);
    fs.accessSync(scssPath, fs.F_OK);
  } catch (e) {
    // Not component directory
    console.warn(`Skipping component ${component}!`);
    return;
  }

  const flexDirectoryPath = path.join(__dirname, 'lib', `${component}-flex`);
  const flexIndexPath = path.join(flexDirectoryPath, 'index.js');
  const flexScssPath = path.join(flexDirectoryPath, '_styles.scss');
  let flexIndexContent = s(fs.readFileSync(indexPath, 'utf8'));

  FLEX_COMPONENTS.forEach((dependency) => {
    flexIndexContent = flexIndexContent.replace(`'../${dependency}'`, `'../${dependency}-flex'`);
  });

  flexIndexContent = flexIndexContent.replace('\'../grid\'', '\'../grid-flex\'');
  flexIndexContent = flexIndexContent.replace('\'../flex-mock\'', '\'../flex\'');
  flexIndexContent = flexIndexContent.replace('IS_FLEX_MODE = false', 'IS_FLEX_MODE = true');

  fs.ensureDirSync(flexDirectoryPath);
  fs.writeFileSync(flexIndexPath, flexIndexContent.value(), 'utf8');
  fs.writeFileSync(flexScssPath, createFlexSccsContent(component), 'utf8');
});
