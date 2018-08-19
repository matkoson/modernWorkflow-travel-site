let gulp = require("gulp"),
imagemin = require("gulp-imagemin"),
del = require("del"),
usemin = require("gulp-usemin");


gulp.task("deleteDistFolder", () => {
    return del("./dist");
  }
)

gulp.task("optimizeImages", ["deleteDistFolder"], () => {
  return gulp.src(["./app/assets/images/**/*", "!./app/assets/images/icons",
  "!./app/assets/images/icons/**/*"])

  .pipe(imagemin({
    progressive: true, //OPTIMIZING .jpgS
    interlaced: true, //OPTIMIZING .GIFS
    multipass: true //OPTIMIZING .svg
  }))

  .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task("usemin", ["deleteDistFolder"], ()=> {
  return gulp.src("./app/index.html")
  .pipe(usemin())
  .pipe(gulp.dest("./dist"));
});



gulp.task("build", ["deleteDistFolder", "optimizeImages", "usemin"]);
