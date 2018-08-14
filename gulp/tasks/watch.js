let gulp = require("gulp"),
watch = require("gulp-watch"),
browserSync = require("browser-sync").create();


gulp.task("watch",()=> {

  browserSync.init({
    server: {baseDir: "app"},
    notify: false
  });

  watch("./app/index.html", ()=>
  browserSync.reload());

  watch("./app/assets/styles/**/*.css", ()=>
  gulp.start("cssInject"));

  watch("./app/assets/scripts/**/*.js", ()=>
  gulp.start("scriptsRefresh"));
  
});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
});
gulp.task("scriptsRefresh",["scripts"], ()=>
browserSync.reload());
