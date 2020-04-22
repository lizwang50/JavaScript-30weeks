var gulp          = require('gulp'),
    del           = require('del'),
    path          = require('path'),
    browserify    = require('browserify'),
    source        = require('vinyl-source-stream'),
    buffer        = require('vinyl-buffer'),
    babelify      = require('babelify'),
    include       = require('gulp-include'),
    sass          = require('gulp-sass'),
    postcss       = require('gulp-postcss'),
    sourcemaps    = require('gulp-sourcemaps'),
    argv          = require('yargs').argv,
    gulpif        = require('gulp-if'),
    autoprefixer  = require('autoprefixer'),
    babel         = require('gulp-babel'),
    uglify        = require('gulp-uglify'),
    postcssFlex   = require('postcss-flexbugs-fixes'),
    postcssSvg    = require('postcss-svg'),
    svgSprite     = require('gulp-svg-sprite'),
    svgSymbols    = require('gulp-svg-symbols'),
    postcssAssets = require('postcss-assets')
    rename        = require('gulp-rename'),
    clean         = require('gulp-clean'),
    browserSync   = require('browser-sync').create(),
    pug           = require('gulp-pug'),
    notify        = require('gulp-notify'),
    cssnano       = require('gulp-cssnano'),
    imagemin      = require('gulp-imagemin'),
    pngquant      = require('imagemin-pngquant'),
    svgmin        = require('gulp-svgmin'),
    ttf2woff      = require('gulp-ttf2woff'),
    ttf2woff2     = require('gulp-ttf2woff2'),
    ttf2eot       = require('gulp-ttf2eot');

//BrowserSync

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
        baseDir: "./dist"
    },
    notify: true,
    open: false
  });
});

//Styles task

gulp.task('styles', function () {
  var processors = [
    autoprefixer(),
    postcssSvg({paths: ['dist/img'], silent: false}),
    postcssAssets({loadPaths: ['dist/img'], basePath: 'dist/img', baseUrl: '/img/'}),
    postcssFlex(),
  ];
  return gulp.src('src/assets/stylesheets/style.sass')
  .pipe(sourcemaps.init())
  .pipe(gulpif(!argv.production, sourcemaps.init()))
  .pipe(sass({includePaths: ['node_modules']}).on('error', notify.onError()))
  .pipe(postcss(processors).on('error', notify.onError()))
  .pipe(cssnano())
  .pipe(gulpif(!argv.production, sourcemaps.write()))
  .pipe(gulp.dest('dist/css/'))
  .pipe(browserSync.stream());
});

//Pug task

gulp.task('pug', function() {
  return gulp.src('src/views/pages/**/*.pug')
  .pipe(pug({pretty: true}).on('error', notify.onError(function (error) {
    return 'Message to the notifier: ' + error.message;
  })))
  .pipe(gulp.dest('dist'));
});

gulp.task('js', function () {
  return browserify({entries: './src/assets/js/scripts.js', paths: ['node_modules', 'src/assets/js'], debug: false})
    .transform('babelify', {presets: ['@babel/env']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulpif(!argv.production, sourcemaps.init()))
    .pipe(uglify().on('error', notify.onError(function (error) {
      return 'Message to the notifier: ' + error.message;
    })))
    .pipe(gulpif(!argv.production, sourcemaps.write()))
    .pipe(gulp.dest('dist/js/'));
});

//optimization img(jpg,png)

gulp.task('optimizationIMG', () => {
  return gulp.src(['src/assets/img/**/*.png', 'src/assets/img/**/*.jpg'])
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest('dist/img/'));
});

//optimization svg

gulp.task('optimizationSVG', function () {
  return gulp.src(['src/assets/img/**/*.svg', '!src/assets/img/sprites/**/*.svg'], {base: 'src/assets/img'})
    .pipe(svgmin())
    .pipe(gulp.dest('dist/img/'));
});

gulp.task('svgFragmentsSprite', function () {
  return gulp.src('src/assets/img/sprites/svg-fragments/**/*.svg')
    .pipe(svgSprite({
      mode: {
        view: {
          dest: '.',
          sprite: 'svg-fragments.svg',
          bust: false
        }
      }
    }))
    .pipe(svgmin({plugins: [{cleanupIDs: false}]}))
    .pipe(gulp.dest('dist/img'));
});

gulp.task('svgSymbolSprite', function () {
  return gulp.src('src/assets/img/sprites/svg-symbols/**/*.svg')
    .pipe(svgSymbols({
      templates: ['default-svg']
    }))
    .pipe(gulp.dest('dist/img'));
});

//Convert fonts(ttf to woff,woff2,eot):

//ttf to woff

gulp.task('ttf2woff', function(){
  gulp.src(['src/assets/fonts/*.ttf'])
    .pipe(ttf2woff())
    .pipe(gulp.dest('src/assets/fonts/'));
});

//ttf to woff2

gulp.task('ttf2woff2', function(){
  gulp.src(['src/assets/fonts/*.ttf'])
    .pipe(ttf2woff2())
    .pipe(gulp.dest('src/assets/fonts/'));
});

//ttf to eot

gulp.task('ttf2eot', function(){
  gulp.src(['src/assets/fonts/*.ttf'])
    .pipe(ttf2eot())
    .pipe(gulp.dest('src/assets/fonts/'));
});

gulp.task('convertFonts', function(done){
  gulp.series('ttf2woff', 'ttf2eot', 'ttf2woff2');
  done();
});

//Task moving fonts to dist folder

gulp.task('fonts', function(done){
  gulp.src(['src/assets/fonts/**/*'])
    .pipe(gulp.dest('dist/fonts/'));
    done();
});

// Clean task

gulp.task('clean', function() {
  return gulp.src('dist', {read: false})
    .pipe(clean())
    .pipe(notify('dist folder was removed'));
});

//Gulp watcher

gulp.task('watch', function () {
  gulp.watch('src/assets/stylesheets/**/*.sass', gulp.parallel('styles'));
  gulp.watch('src/views/**/*.pug', gulp.parallel('pug'));
  gulp.watch('dist/**/*.html').on('change', browserSync.reload);
  gulp.watch('src/assets/js/**/*.js', gulp.parallel('js'));
  gulp.watch('dist/js/scripts.js').on('change', browserSync.reload);
  gulp.watch(['src/assets/img/sprites/svg-fragments/**/*.svg'], gulp.parallel('svgFragmentsSprite'));
  gulp.watch(['src/assets/img/sprites/svg-symbols/**/*.svg'], gulp.parallel('svgSymbolSprite'));

  var svgWatcher = gulp.watch(['src/assets/img/**/*.svg', '!src/assets/img/sprites/**/*.svg'], gulp.parallel('optimizationSVG'));
  var imgWatcher = gulp.watch(['src/assets/img/**/*.png', 'src/assets/img/**/*.jpg'], gulp.parallel('optimizationIMG'));

  function watcher(task) {
    task.on('unlink', function (filepath) {
      var filePathFromSrc = path.relative(path.resolve('src/assets/img'), filepath);
      var destFilePath = path.resolve('dist/img', filePathFromSrc);
      del.sync(destFilePath);
    });
  }

  watcher(svgWatcher);
  watcher(imgWatcher);
});

//Default Gulp task

gulp.task('default', gulp.series('fonts','optimizationIMG', 'optimizationSVG', 'svgSymbolSprite', 'svgFragmentsSprite', gulp.parallel('styles', 'pug', 'js'), gulp.parallel('browser-sync', 'watch')));
