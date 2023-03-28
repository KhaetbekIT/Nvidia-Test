'use strict';

const { task, watch, src, dest, parallel, series } = require("gulp")
const browserSync = require("browser-sync").create()
const sass = require("gulp-sass")(require("sass"))
const sourcemaps = require("gulp-sourcemaps")
const del = require("del")
const pug = require("gulp-pug")

task("del", () => {
    return del("./dist")
})

task("pug", () => {
    return src("./source/pug/*.pug").pipe(
        pug({
            pretty: true
        })

    ).pipe(dest("./dist/"))

})

task("css", () => {
    return src("./source/scss/main.scss").pipe(sourcemaps.init())
        .pipe(
            sass({
                outputStyle: 'compressed'
            }))
        .pipe(sourcemaps.write("maps"))
        .pipe(dest("./dist/css/"))
        .pipe(browserSync.stream())
})

task("images", () => {
    return src("./source/images/**/*.*")
        .pipe(dest("./dist/images/"))
        .pipe(browserSync.stream())
})

task("js", () => {
    return src("./source/js/**/*.js")
        .pipe(dest("./dist/js/"))
        .pipe(browserSync.stream())
})

task("server", () => {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    watch("./source/scss/**/*.scss")
    watch("./source/js/**/*.js")
    watch("./dist/images/**/*.*").on('change', browserSync.reload)
    watch("./dist/*.html").on('change', browserSync.reload)
})

task("watch", () => {
    watch("./source/pug/**/*.pug", parallel("pug"))
    watch("./source/scss/**/*.scss", parallel("css"))
    watch("./source/js/**/*.js", parallel("js"))
    watch("./source/images/**/*.*", parallel("images"))
})

task("default", series(
    "del",
    parallel("pug", "css","js"),
    parallel("watch", "images", "server")
))