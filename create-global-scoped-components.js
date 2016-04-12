/* eslint-disable no-console */

const path = require('path');
const fs = require('fs-extra');
const through2 = require('through2');
const s = require('underscore.string');

const libPath = path.join(__dirname, 'lib');
const globalPath = path.join(libPath, 'global');
const packageIndexPath = path.join(libPath, 'index.js');
const packageFlexboxIndexPath = path.join(libPath, 'flexbox.js');
const globalPackageIndexPath = path.join(globalPath, 'index.js');
const globalPackageFlexboxIndexPath = path.join(globalPath, 'flexbox.js');

fs.ensureDirSync(path.dirname(globalPath));
fs.copySync(packageIndexPath, globalPackageIndexPath);
fs.copySync(packageFlexboxIndexPath, globalPackageFlexboxIndexPath);

const filter = through2.obj(function componentDirectoryFilter(item, enc, next) {
  if (item.stats.isFile()) {
    const fileName = path.basename(item.path);

    if (fileName === 'index.js') {
      const directory = path.dirname(item.path);
      const scssPath = path.join(directory, '_styles.scss');

      try {
        fs.accessSync(item.path, fs.F_OK);
        fs.accessSync(scssPath, fs.F_OK);

        this.push(item);
      } catch (e) {
        // Not component directory
      }
    }
  }

  next();
});

fs.walk(libPath)
  .pipe(filter)
  .on('data', (item) => {
    const globalComponentPath =
      s(item.path)
        .reverse()
        .replace(
          s(`lib${path.sep}`).reverse().value(),
          s(`lib${path.sep}global${path.sep}`).reverse().value()
        )
        .reverse()
        .value();

    const content = fs.readFileSync(item.path, 'utf8')
        .replace(/require\('\.\/\_styles\.scss'\)/g, '{}')
        .replace(/require\('classnames\/bind'\)/, 'require(\'classnames\')')
        .replace(/require\('\.\.\/util\//g, 'require(\'../../util/')

    fs.ensureDirSync(path.dirname(globalComponentPath));
    fs.writeFileSync(globalComponentPath, content, 'utf8');
  });
