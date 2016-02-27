/* eslint-disable no-console, prefer-arrow-callback, prefer-template */

const path = require('path');
const fs = require('fs-extra');
const through2 = require('through2');
const s = require('underscore.string');

const filter = through2.obj(function componentDirectoryFilter(item, enc, next) {
  if (item.stats.isFile()) {
    const fileName = path.basename(item.path);

    if (fileName === 'index.js') {
      const directory = path.dirname(item.path);
      const stylesPath = path.join(directory, 'styles.js');
      const cssPath = path.join(directory, '_styles.scss');

      try {
        fs.accessSync(item.path, fs.F_OK);
        fs.accessSync(stylesPath, fs.F_OK);
        fs.accessSync(cssPath, fs.F_OK);

        this.push(item);
      } catch (e) {
        // Not component directory
      }
    }
  }

  next();
});

fs.walk('.' + path.sep + 'lib')
  .pipe(filter)
  .on('data', function processDirectory(item) {
    const globalPath =
      s(item.path)
        .reverse()
        .replace(
          s('lib' + path.sep).reverse().value(),
          s('lib' + path.sep + 'global' + path.sep).reverse().value()
        )
        .reverse()
        .value();
    const relativePath =
      path.relative(path.dirname(globalPath), path.dirname(item.path)).split(path.sep).join('/');

    const stylesPath = '\'' + relativePath + '/' + 'styles\'';
    const createPath = '\'' + relativePath + '/' + 'create\'';
    const variantCreatePath = '\'' + relativePath + '/../' + 'create\'';
    const content =
      s(fs.readFileSync(item.path, 'utf8'))
        .replace('\'./_styles.scss\'', stylesPath)
        .replace('\'./create\'', createPath)
        .replace('\'../create\'', variantCreatePath)
        .value();

    fs.ensureDirSync(path.dirname(globalPath));
    fs.writeFileSync(globalPath, content, 'utf8');
  });
