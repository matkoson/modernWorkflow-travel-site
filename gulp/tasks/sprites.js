var gulp = require("gulp"),
svgSprite = require("gulp-svg-sprite"),
rename = require("gulp-rename");


var config = {
  mode: {
    css: {
      sprite: "sprite.svg",
      render: {
        css: {
          template: "./gulp/templates/sprite.css"
        }
      }
    }
  }
};

gulp.task("createSprite", () => gulp.src("./app/assets/images/icons/**/*.svg")
.pipe(svgSprite(config))
.pipe(gulp.dest("./app/temp/sprites")));


gulp.task("copySpriteGraphic",["createSprite"], ()=>
gulp.src("./app/temp/sprites/css/**/*.svg")
.pipe(gulp.dest("./app/assets/images/sprites")));

gulp.task("copySpriteCSS",["createSprite"],
()=> gulp.src("./app/temp/sprites/css/*.css")
    .pipe(rename("_sprite.css"))
    .pipe(gulp.dest("./app/assets/styles/modules")));

gulp.task("icons", ["createSprite", "copySpriteGraphic","copySpriteCSS"]);
