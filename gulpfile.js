var gulp = require('gulp');
var remarkable = require('gulp-remarkable');

gulp.task('html', function () {
  return gulp.src('./dist/resume.md')
    .pipe(remarkable({
      preset: 'commonmark'
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['html']);
