 // gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var concat = require('gulp-concat');

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
        .pipe(gulp.dest('./js'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*.sass', ['css']);
  gulp.watch('./src/**/*.js', ['js']);
});

gulp.task('default', ['watch']);