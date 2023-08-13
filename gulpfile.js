
const { src, dest, watch, series, parallel } = require('gulp')
const del = require('del')
const browserSync = require('browser-sync').create()
const fileInclude = require('gulp-file-include')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const webpack = require('webpack-stream')
const babel = require('gulp-babel')
const htmlmin = require('gulp-htmlmin')
const sourcemaps = require('gulp-sourcemaps')


function clean() {
  return del('dist')
}

function html() {
  return src('src/*.html')
    .pipe(fileInclude({
      prefix: '@@',
      basepath: 'src'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}


function css() {
  return src('src/sass/**/*.sass')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream())
}

function js() {
  return src('src/js/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(webpack({
      // mode: 'production',
      mode: 'development',
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream())
}

function images() {
  return src('src/img/**/*.{jpg,png,ico,svg}')
    .pipe(dest('dist/img'))
}

function fonts() {
  return src('src/fonts/**/*.{woff,woff2}')
    .pipe(dest('dist/fonts'))
}

function audio() {
  return src('src/audio/**/*.mp3')
    .pipe(dest('dist/audio'))
}

function serve() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })

  watch('src/**/*.html', html)
  watch('src/sass/**/*.sass', css)
  watch('src/js/**/*.js', js)
}

exports.default = series(clean, parallel(html, css, js, fonts, images, audio), serve)