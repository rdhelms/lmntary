var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var watchify = require('watchify');
var del = require('del');

// Clean dist
gulp.task('clean', function () {
    return del('dist');
});

// Server TypeScript
var tsProject = ts.createProject('tsconfig.json');
function copyServerTs () {
    return gulp.src('src/server/**/*.ts')
        .pipe(tsProject())
        .js.pipe(gulp.dest('dist/server'));
}
gulp.task('copy-server-ts', copyServerTs);
gulp.task('watch-server-ts', function () {
    return watch('src/server/**/*.ts', copyServerTs);
})

// Client TypeScript
var b = browserify({
    basedir: '.',
    debug: true,
    entries: ['src/client/index.ts'],
    cache: {},
    packageCache: {}
}).plugin(tsify);
gulp.task('copy-client-ts', function () {
    return b.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist/client'));
})
gulp.task('watch-client-ts', function () {
    var watchedBrowserify = watchify(b);
    function bundle () {
        return watchedBrowserify
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('dist/client'));
    }
    watchedBrowserify.on('update', bundle);
    watchedBrowserify.on('log', gutil.log);
    return bundle();
});

// Client HTML
function copyHtml () {
    return gulp.src('src/client/index.html')
        .pipe(gulp.dest('dist/client'));
}
gulp.task('copy-html', copyHtml);
gulp.task('watch-html', function () {
    return watch('src/client/index.html', copyHtml);
})

// Client Styles
function copyStyles () {
    return gulp.src('src/client/**/*.css')
        .pipe(gulp.dest('dist/client'));
}
gulp.task('copy-styles', copyStyles);
gulp.task('watch-styles', function () {
    return watch('src/client/**/*.css', copyStyles);
})

gulp.task('default', gulp.series('clean', gulp.parallel('copy-html', 'copy-server-ts', 'copy-client-ts', 'copy-styles')));

gulp.task('watch', gulp.series('default', gulp.parallel('watch-html', 'watch-server-ts', 'watch-styles', 'watch-client-ts')));
