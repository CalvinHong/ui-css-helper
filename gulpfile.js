var postcss = require('gulp-postcss');
var gulp = require('gulp');
var filelog = require('gulp-filelog');
var path = require('path');
//源目录
var srcPath = path.join(__dirname,'src/*.css');
//生成目录
var distPath = path.join(__dirname,'dist');
gulp.task('watch',['default'],function () {
    gulp.watch([srcPath,path.join(__dirname,'variable.js')] , ['default']);
});
gulp.task('default', function() {
  return gulp.src(srcPath)
            .pipe(postcss())
            .pipe(filelog())
            .pipe(gulp.dest(distPath));
});
