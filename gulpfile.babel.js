const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

var from = {
  img: 'assets/images/**/*.@(png|jpg|gif)'
};
var to = {
  img: 'assets/images/'
};

gulp.task('imagemin', () => {
    return gulp.src(from.img)
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            svgoPlugins: [
                {removeViewBox: false},
                {cleanupIDs: false}
            ],
            use: [pngquant()]
        }))
        .pipe(gulp.dest(to.img));
});

gulp.task('default', function() {
    // place code for your default task here
});
