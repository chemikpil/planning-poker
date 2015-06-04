var gulp        = require('gulp');
var watch       = require('gulp-watch');
var less        = require('gulp-less');
var minifyCSS         = require('gulp-minify-css');
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
          .pipe(config.js.dist);
});

gulp.task('css', function () {
  return gulp.src(config.css.main)
          .pipe(less())
          .pipe(minifyCSS())
          .pipe(gulp.dest(config.css.dist));
});

gulp.task('copyHTML', function () {
  return gulp.src(config.html.source)
          .pipe(gulp.dest(config.html.dist));
});

gulp.task('build', ['clean'], function () {
  gulp.start([
    'uglify',
    'css',
    'copyHTML'
  ]);
});

gulp.task('watch', function () {
  gulp.watch(config.css.source, ['css', browserSync.reload]);
  gulp.watch(config.js.source, ['uglify', browserSync.reload]);
  gulp.watch(config.html.source, ['copyHTML', browserSync.reload]);
});

gulp.task('serve', ['watch'], function() {
  browserSync.init({
    server: buildDir
  });
});