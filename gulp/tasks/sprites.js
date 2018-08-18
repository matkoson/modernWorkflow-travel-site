var gulp = require("gulp"),
svgSprite = require("gulp-svg-sprite"),
rename = require("gulp-rename"),
del = require("del"),
svg2png = require("gulp-svg2png");



var config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      variables: {
        replaceSvgWithPng: ()=> {
          return (sprites, render)=> {
            return render(sprites).split(".svg").join(".png")
          }
        }
      },
      sprite: "sprite.svg",
      render: {
        css: {
          template: "./gulp/templates/sprite.css"
        }
      }
    }
  }
};

gulp.task("beginClean", ()=>
del(["./app/temp/sprites", "./app/assets/images/sprites"])
);

gulp.task("createSprite", ["beginClean"], () => gulp.src("./app/assets/images/icons/**/*.svg") //TAKES A FOLDER FULL OF SVGs, AND pipeS IT THROUGH svgSprite(), WHICH WILL=>
//1. COMBINE IT + 2. TAKE COORDS FROM THE COMBINED SPRITE FILE, AND WILL SAVE IT IN template:
.pipe(svgSprite(config))
.pipe(gulp.dest("./app/temp/sprites")));

gulp.task("createPngCopy", ["createSprite"], ()=> {
  return gulp.src("./app/temp/sprites/css/**/*.svg")
  .pipe(svg2png())
  .pipe(gulp.dest("./app/temp/sprites/css"));
})




gulp.task("copySpriteGraphic", ["createSprite", "createPngCopy"], ()=>
gulp.src("./app/temp/sprites/css/**/*.{svg,png}")
.pipe(gulp.dest("./app/assets/images/sprites")));

gulp.task("copySpriteCSS",["createSprite"],
()=> gulp.src("./app/temp/sprites/css/*.css")
    .pipe(rename("_sprite.css"))
    .pipe(gulp.dest("./app/assets/styles/modules")));

gulp.task("endClean", ["copySpriteGraphic","copySpriteCSS"], ()=>
del("./app/temp/sprites"));

gulp.task("icons", ["beginClean", "createSprite", "createPngCopy", "copySpriteGraphic", "copySpriteCSS", "endClean"]);
