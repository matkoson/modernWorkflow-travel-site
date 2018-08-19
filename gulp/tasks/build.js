let gulp = require("gulp"),
imagemin = require("gulp-imagemin"),
del = require("del"),
usemin = require("gulp-usemin"),
rev = require("gulp-rev"),
cssnano = require("gulp-cssnano"),
uglify = require("gulp-uglify"),
browserSync = require("browser-sync").create();


gulp.task("previewDist", () => {
  browserSync.init({
    server: {baseDir: "docs"},
    notify: false
  });
  }
);


gulp.task("deleteDistFolder", ["icons"], () => {
    return del("./docs");
  }
)

gulp.task("copyGeneralFiles", ["deleteDistFolder"], ()=> {
  let pathsToCopy = ["./app/**/*",
  "!./app/index.html",
"!./app/assets/images/**",
"!./app/assets/styles/**",
"!./app/assets/scripts/**",
"!./app/assets/temp",
"!./app/assets/temp/**"];

  return gulp.src(pathsToCopy)
  .pipe(gulp.dest("./docs"))
});

gulp.task("optimizeImages", ["deleteDistFolder"], () => {
  return gulp.src(["./app/assets/images/**/*", "!./app/assets/images/icons",
  "!./app/assets/images/icons/**/*"])

  .pipe(imagemin({
    progressive: true, //OPTIMIZING .jpgS
    interlaced: true, //OPTIMIZING .GIFS
    multipass: true //OPTIMIZING .svg
  }))

  .pipe(gulp.dest("./docs/assets/images"));
});


gulp.task("useminTrigger", ["deleteDistFolder"], ()=> {
  gulp.start("usemin");
});

gulp.task("usemin", ["styles", "scripts"], ()=> {
  return gulp.src("./app/index.html")
  .pipe(usemin({
    css: [()=>{console.log("rev done"); return rev();}, ()=> {return cssnano()}],
    js:  [()=>{console.log("rev done"); return rev();}, ()=>{return uglify()}]
  }))
  .pipe(gulp.dest("./docs"));
});



gulp.task("build", ["deleteDistFolder", "copyGeneralFiles" ,"optimizeImages", "useminTrigger"]);
