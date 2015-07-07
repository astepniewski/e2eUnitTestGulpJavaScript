var gulp = require('gulp');
var mocha = require('gulp-mocha');
var gutil = require('gulp-util');
//var casperJs = require('gulp-casperjs');
var spawn = require('child_process').spawn;
var filenames = require("gulp-filenames");

gulp.task('unit', function () {
    return gulp.src(['Tests/unit/*.js'], { read: false })
    .pipe(mocha({
        reporter: 'spec',
        globals: {
            assert: require("assert")
        }
    }));
});

gulp.task('watch-unit', function () {
    gulp.watch(['Scripts/*.js'], ['mocha']);
});

//gulp.task('casperjs', function () {
//    gulp.src(['Tests/unit/*.js'], { read: false })
//    .pipe(casperJs());
//});

gulp.task('e2e', function () {
    var filenames = require("gulp-filenames");
    
    gulp.src("./Tests/e2e/*.js")
    .pipe(filenames("testFiles"));

    var tests = filenames.get('testFiles');
    
    var casperChild = spawn('casperjs', ['test Tests/e2e/'].concat(tests));
    
    casperChild.stdout.on('data', function (data) {
        gutil.log('CasperJS:', data.toString().slice(0, -1)); // Remove \n
    });
    
    casperChild.on('close', function (code) {
        var success = code === 0; // Will be 1 in the event of failure
    });
});