'use strict';

// Include gulp
const { src, dest } = require('gulp');

// Include Our Plugins
const prefix = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

/**
 * Error handler function so we can see when errors happen.
 * @param {object} err error that was thrown
 * @returns {undefined}
 */
function handleError(err) {
  // eslint-disable-next-line no-console
  console.error(err.toString());
  this.emit('end');
}

// Export our tasks.
module.exports = {
  // Compile CSS.
  compileCSS: function() {
    return src('./src/patterns/**/**/*.css')
      .pipe(sourcemaps.init())
      .pipe(postcss())
      .pipe(sourcemaps.write('.'))
      .pipe(
        rename(function(path) {
          path.dirname = '';
          return path;
        })
      )
      .pipe(dest('./dist/css'));
  },

  // Compile JavaScript.
  compileJS: function() {
    return src(['./src/patterns/**/**/*.js'], { base: './' })
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(
        rename(function(path) {
          // Currently not using ES6 modules so for now
          // es6 files are compiled into individual JS files.
          // Eventually this can use ES6 Modules and compile
          // all files within a component directory into a single
          // foo.bundle.js file. In that case the bundle name should
          // reflect the components directory name.
          path.dirname = '';
          return path;
        })
      )
      .pipe(sourcemaps.write('./'))
      .pipe(dest('./dist/js'));
  }
};
