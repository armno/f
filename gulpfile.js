var gulp = require('gulp');

gulp.task('lorem', function() {
  console.log('lorem ipsum');
});

gulp.task('watch', function() {
  gulp.watch('index.html', ['lorem']);
});

gulp.task('default', ['watch']);