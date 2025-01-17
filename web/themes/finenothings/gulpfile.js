'use strict';

// Include gulp helpers.
const { series, parallel, watch } = require('gulp');

// Include Pattern Lab and config.
const config = require('./patternlab-config.json');
const patternlab = require('@pattern-lab/core')(config);

// Include Our tasks.
//
// Each task is broken apart to it's own node module.
// Check out the ./gulp-tasks directory for more.
const { compileCSS, compileJS } = require('./gulp-tasks/compile');
const { lintJS, lintCSS } = require('./gulp-tasks/lint');
const { compressAssets } = require('./gulp-tasks/compress');
const { cleanCSS, cleanJS } = require('./gulp-tasks/clean');
const { concatCSS, concatJS } = require('./gulp-tasks/concat');
const { moveFonts, movePatternCSS } = require('./gulp-tasks/move');
const { prettier } = require('./gulp-tasks/format');
const server = require('browser-sync').create();

// Compile Our CSS and JS
exports.compile = parallel(compileCSS, compileJS, moveFonts, movePatternCSS);

// Lint CSS and JavaScript
exports.lint = parallel(lintCSS, lintJS);

// Format JS files with Prettier and ESlint
exports.format = prettier;

// Compress Files
exports.compress = compressAssets;

// Concat all CSS and JS files into a master bundle.
exports.concat = parallel(concatCSS, concatJS);

// Clean all directories.
exports.clean = parallel(cleanCSS, cleanJS);

/**
 * Start browsersync server.
 * @param {function} done callback function.
 * @returns {undefined}
 */
function serve(done) {
  // See https://browsersync.io/docs/options for more options.
  server.init({
    // We want to serve both the patternlab directory, so it gets
    // loaded by default AND three directories up which is the
    // Drupal core directory. This allows urls that reference
    // Drupal core JS files to resolve correctly.
    // i.e. /core/misc/drupal.js
    server: ['./patternlab/', '../../../'],
    notify: false,
    open: false
  });
  done();
}

/**
 * Start Pattern Lab build watch process.
 * @param {function} done callback function.
 * @returns {undefined}
 */
function watchPatternlab(done) {
  patternlab
    .build({
      cleanPublic: config.cleanPublic,
      watch: true
    })
    .then(() => {
      done();
    });
}

/**
 * Build Pattern Lab.
 * @param {function} done callback function.
 * @returns {undefined}
 */
function buildPatternlab(done) {
  patternlab
    .build({
      cleanPublic: config.cleanPublic,
      watch: false
    })
    .then(() => {
      done();
    });
}

/**
 * Watch CSS and JS files.
 * @returns {undefined}
 */
function watchFiles() {
  // Watch all my CSS files and compile CSS if a file changes.
  watch(
    './src/patterns/**/**/*.css',
    series(parallel(lintCSS, compileCSS), concatCSS, (done) => {
      server.reload('*.css');
      done();
    })
  );

  // Watch all my JS files and compile if a file changes.
  watch(
    './src/patterns/**/**/*.js',
    series(
      prettier,
      parallel(lintJS, compileJS), concatJS, (done) => {
        server.reload('*.js');
        done();
      }
    )
  );

  // Watch all my images and SVG files and compile if a file changes.
  watch(
    './src/patterns/**/**/*{.png,.jpg,.svg}',
    series(
      parallel(compressAssets), (done) => {
        server.reload('*{.png,.jpg,.svg,.html}');
        done();
      }
    )
  );

  // Reload the browser after patternlab updates.
  patternlab.events.on('patternlab-build-end', () => {
    server.reload('*.html');
  });
}

// Watch task that runs a browsersync server.
exports.watch = series(
  parallel(cleanCSS, cleanJS),
  parallel(
    lintCSS,
    compileCSS,
    lintJS,
    compileJS,
    compressAssets,
    moveFonts,
    movePatternCSS
  ),
  parallel(concatCSS, concatJS),
  series(watchPatternlab, serve, watchFiles)
);

// Build task for Pattern Lab.
exports.styleguide = buildPatternlab;

// Default Task
exports.default = series(
  parallel(cleanCSS, cleanJS),
  parallel(
    lintCSS,
    compileCSS,
    lintJS,
    compileJS,
    compressAssets,
    moveFonts,
    movePatternCSS
  ),
  parallel(concatCSS, concatJS),
  buildPatternlab
);
