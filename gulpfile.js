const { task, src, dest, series, parallel, watch } = require("gulp");
const del = require("del");
const pug = require("gulp-pug");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));

task("clear", function (callback) {
  return del("./build");
  callback();
});
task("pug", function (callback) {
  return src("./source/pug/**/index.pug")
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest("./build/"));
  callback();
});
task("css", (callback) => {
  return src("./source/scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write("map"))
    .pipe(dest("./build/css"));
  callback();
});
task("scss", (callback) => {
  return src("./source/scss/**/*.scss").pipe(dest("./build/sass"));
  callback();
});
task("image", (callback) => {
  return src("./source/img/**/*.*").pipe(dest("./build/img"));
  callback();
});
task("js", (callback) => {
  return src("./source/js/**/*.js").pipe(dest("./build/js"));
  callback();
});

task("watch", function () {
  watch("./source/pug/**/*.pug", parallel("pug"));
  watch("./source/scss/**/*.*", parallel("css"));
  watch("./source/scss/**/*.scss", parallel("scss"));
  watch("./source/img/**/*.*", parallel("image"));
  watch("./source/js/**/*.js", parallel("js"));
});

task(
  "default",
  series(
    parallel("clear"),
    parallel("pug"),
    parallel("watch","css", "scss", "image", "js")
  )
);
