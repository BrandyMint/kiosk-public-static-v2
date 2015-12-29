import gulp from 'gulp';
import include from 'gulp-file-include';
import haml from 'gulp-haml-coffee';
import { reload } from 'browser-sync';
import handleErrors from '../../util/handleErrors';
import { haml as config } from '../../config';

gulp.task('[Static] Haml', () => {
  return gulp.src(config.static.src)
    .on('error', handleErrors)
    .pipe(include({ prefix: '@@', basepath: '@file' }))
    .pipe(haml())
    .pipe(gulp.dest(config.static.dest))
    .pipe(reload({ stream: true }));
});