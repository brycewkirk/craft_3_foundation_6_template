var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify');  

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

// Convert Sass to CSS
gulp.task('sass', function() {
  return gulp.src('web/assets/scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('web/assets/css'));
});

// Combine and minify JS
var jsFiles = 'web/assets/js/src/**/*.js',  
    jsDest = 'web/assets/js/dist';

gulp.task('javascript', function() {  
  // return gulp.src(jsFiles)
  return gulp.src([
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/foundation-sites/dist/js/foundation.min.js',
    'web/assets/js/src/app.js'
    ])
  .pipe(concat('scripts.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest(jsDest))
});

// Watch for changes in JS and SCSS folders
gulp.task('watch', function() {
  gulp.watch('web/assets/js/src/**/*.js', ['javascript']);
  gulp.watch('web/assets/scss/**/*.scss', ['sass']);
});

// gulp.task('default', ['sass'], function() {
//   gulp.watch(['assets/scss/**/*.scss'], ['sass']);
// });