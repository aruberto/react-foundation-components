/* eslint-disable no-console, prefer-arrow-callback, prefer-template */

const path = require('path');
const fs = require('fs-extra');

const createFlexSccsContent = (component) =>
`$global-flexbox: true;

@import '../${component}/styles';
`;

const COMPONENTS = [
  'button-group',
];

COMPONENTS.forEach((component) => {
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

  fs.ensureDirSync(flexDirectoryPath);
  fs.copySync(indexPath, flexIndexPath);
  fs.writeFileSync(flexScssPath, createFlexSccsContent(component), 'utf8');
});
