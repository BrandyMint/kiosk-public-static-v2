import gulp from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import cssPrefix from 'gulp-css-prefix';
import cssWrap from 'gulp-css-wrap';
import autoprefixer from 'gulp-autoprefixer';
import handleErrors from '../../util/handleErrors';
import { styles as config } from '../../config';

gulp.task('[Static] Styles', () => {
  return gulp.src(config.static.src)
    .on('error', handleErrors)
    .pipe(sass({
      errLogToConsole: true,
      sourceComments: 'normal',
      includePaths: [
        './app/stylesheets/',
        './app/bower_components/',
        './app/bower_components/bootstrap-sass-official/assets/stylesheets/bootstrap'
      ]
    }))
    // .pipe(cssPrefix('.mrch'))
    // .pipe(cssWrap({selector: '.mrch'}))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename(config.static.outputName))
    .pipe(gulp.dest(config.static.dest));
});

// gulp.task('css-wrap', function() {
//   return gulp.src('src/*.css')
//     .pipe(cssWrap({selector:'.my-app'}))
//     .pipe(gulp.dest('dist'));
// });