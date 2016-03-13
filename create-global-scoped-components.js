/* eslint-disable no-console */

const path = require('path');
const fs = require('fs-extra');
const through2 = require('through2');
const s = require('underscore.string');

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

fs.walk(path.join(__dirname, 'lib'))
  .pipe(filter)
  .on('data', (item) => {
    const globalPath =
      s(item.path)
        .reverse()
        .replace(
          s(`lib${path.sep}`).reverse().value(),
          s(`lib${path.sep}global${path.sep}`).reverse().value()
        )
        .reverse()
        .value();
    const content =
      s(fs.readFileSync(item.path, 'utf8'))
        .replace('require(\'./_styles.scss\')', '{}')
        .replace('require(\'classnames/bind\')', 'require(\'classnames\')')
        .value();

    fs.ensureDirSync(path.dirname(globalPath));
    fs.writeFileSync(globalPath, content, 'utf8');
  });
