var gulp = require("gulp");
var typescript = require("gulp-typescript");
var concat = require("gulp-concat");

var targetCountentScript = "app/scripts.typescript/contentscript.ts";
var targetBackground = "app/scripts.typescript/background.ts";
var targetOptions = "app/scripts.typescript/options.ts";

gulp.task("build", function(){
  gulp.src(targetOptions)
    .pipe(typescript({ out: "options.js", target: "ES5", removeComments: true }))
    .pipe(gulp.dest("app/scripts/"));
  gulp.src(targetCountentScript)
    .pipe(typescript({ out: "contentscript.js", target: "ES5", removeComments: true }))
    .pipe(gulp.dest("app/scripts/"));
  gulp.src(targetBackground)
    .pipe(typescript({ out: "background.js", target: "ES5", removeComments: true }))
    .pipe(gulp.dest("app/scripts/"));
});

gulp.task("watch", function(){
  gulp.watch("app/scripts.typescript/**/*.ts", ["build"]);
});

gulp.task("default", ["build", "watch"]);
