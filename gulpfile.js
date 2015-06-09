var gulp        = require('gulp');
var watch       = require('gulp-watch');
var less        = require('gulp-less');
var minifyCSS   = require('gulp-minify-css');
var prefix      = require('gulp-autoprefixer');
var imagemin    = require('gulp-imagemin');
var uglify      = require('gulp-uglify');
var prefix      = require('gulp-autoprefixer');
var clean       = require('gulp-clean');
var browserSync = require('browser-sync');

var buildDir    = './.build/';
var config = {
  css: {
    source: './css/**/*.less',
    main: './css/*.less',
    dist: buildDir + 'css/'
  },
  js: {
    source: './js/*.js',
    dist: buildDir + 'js/'
  },
  fonts: {
    source: './fonts/*.*',
    dist: buildDir + 'fonts/'
  },
  html: {
    source: './*.html',
    dist: buildDir
  },
  images: {
    source: './img/**/*.{png,jpg,jpeg,gif,svg}',
    dist: buildDir + 'img/'
  }
};

gulp.task('clean', function () {
  return gulp.src(buildDir, {read: false})
    .pipe(clean({force: true}));
});

gulp.task('uglify', function () {
  return gulp.src(config.js.source)
          .pipe(uglify())
          .pipe(gulp.dest(config.js.dist));
});

gulp.task('css', function () {
  return gulp.src(config.css.main)
          .pipe(prefix('last 2 version', 'android 2.1'))
          .pipe(less())
          .pipe(minifyCSS())
          .pipe(gulp.dest(config.css.dist));
});

gulp.task('copyImages', function () {
  return gulp.src(config.images.source)
          .pipe(imagemin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [{removeUnknownsAndDefaults: false}, {cleanupIDs: false}]
          }))
          .pipe(gulp.dest(config.images.dist));
});

gulp.task('copyFonts', function () {
  return gulp.src(config.fonts.source)
          .pipe(gulp.dest(config.fonts.dist));
});

gulp.task('copyHTML', function () {
  return gulp.src(config.html.source)
          .pipe(gulp.dest(config.html.dist));
});

gulp.task('build', ['clean'], function () {
  gulp.start([
    'uglify',
    'css',
    'copyHTML',
    'copyImages',
    'copyFonts'
  ]);
});

gulp.task('watch', function () {
  gulp.watch(config.css.source, ['css', browserSync.reload]);
  gulp.watch(config.js.source, ['uglify', browserSync.reload]);
  gulp.watch(config.html.source, ['copyHTML', browserSync.reload]);
});

gulp.task('serve', ['build', 'watch'], function() {
  browserSync.init({
    server: buildDir
  });
});