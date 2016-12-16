var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('global', ['seejs']);

gulp.task('checkjs', function() {
    return gulp.src('scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('seejs', function() {
    gulp.watch('scripts/*.js', ['checkjs']);
});
