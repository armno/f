 // gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

gulp.task('css', function(){
  return gulp.src('./sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('js', function(){
  return gulp.src([
        './src/js/model.js',
        './src/js/controller.js'
        ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./js'));
});

gulp.task('html', function() {
  return gulp.src(['./src/index.html'])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.sass', ['css']);
  gulp.watch('./src/**/*.js', ['js']);
  gulp.watch('./src/index.html', ['html']);
});

gulp.task('default', ['css', 'js', 'html', 'watch']);