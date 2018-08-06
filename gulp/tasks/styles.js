let gulp = require("gulp"),
postCss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssVars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
postImport = require("postcss-import"),
mixins = require("postcss-mixins");



gulp.task("styles", ()=> {
  return gulp.src("./app/assets/styles/styles.css")
  .pipe(postCss([postImport, mixins, cssVars, autoprefixer, nested]))
  .on("error", function (err){console.log(err.toString());this.emit("end");})
  .pipe(gulp.dest("./app/temp/styles"));
});
