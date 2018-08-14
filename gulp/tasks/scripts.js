const gulp = require("gulp"),
webpack = require("webpack");


gulp.task("scripts", function(cb) {
  webpack(require("../../webpack.config.js"), (err,stats)=> {
    if(err) {
      console.log(err.toString());
    }
  console.log(stats.toString());cb();}
  )
});
