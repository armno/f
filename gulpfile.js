// gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

gulp.task('build', function() {
    gulp.src('./sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./css'));

    gulp.src([
        './src/js/model.js',
        './src/js/controller.js'
        ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));

    gulp.src(['./src/index.html'])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('.'));
});

gulp.task('default', function() {
  gulp.watch('./src/**/*', ['build']);
});