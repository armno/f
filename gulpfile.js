 // gulpfile.js
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('css', function(){
  return gulp.src('./sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch('sass/**/*.sass', ['css']);
});

gulp.task('default', ['watch']);