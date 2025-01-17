'use strict';

// Include gulp
const { src } = require('gulp');

// Include Our Plugins
const gulpStylelint = require('@ronilaukkarinen/gulp-stylelint');
const eslint = require('gulp-eslint');

// Export our tasks.
module.exports = {
  // Lint CSS based on .stylelintrc.yml config.
  lintCSS: function () {
    return src([
      './src/patterns/{global,layout,components}/**/*.css',
    ])
      .pipe(
        gulpStylelint({
          reporters: [
            {
              formatter: 'string',
              console: true
            }
          ]
        })
      );
  },

  // Lint JavaScript based on .eslintrc config.
  lintJS: function() {
    return src([
      './src/patterns/{global,layout,components}/**/*.js',
      '!./src/patterns/components/**/vendors/*'
    ])
      .pipe(eslint())
      .pipe(eslint.format());
  }
};
