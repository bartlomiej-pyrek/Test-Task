const gulp = require('gulp'),
    sass = require('gulp-sass'),
    notify = require("gulp-notify");


gulp.task('sass', () => {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .on('error', notify.onError((error) => {
            return 'An error occurred while compiling sass.\nLook in the console for details.\n' + error;
        }))
        .pipe(gulp.dest('assets/css'))
    // .pipe(notify({
    //     message: 'Styles task complete'
    // }));
});

gulp.task('watch', () => {
    gulp.watch('assets/scss/**/*.scss', gulp.series('sass'));
})