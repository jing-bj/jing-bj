var gulp=require('gulp');
// var concat=require("gulp-concat");
// var uglify=require("gulp-uglify");
// var cssnano=require("gulp-cssnano");
var $=require("gulp-load-plugins")();
var app={
	srcPath:"src/",
	devPath:"build/",
	prdPath:"dist/"
};
// gulp.task('hello',function(){
// 	console.log("hello  world");
// });
// gulp.task('html',function(){
// 	gulp.src('src/**/*.html')   
// 	.pipe(gulp.dest('dist/'));     
// });

// gulp.task('js',function(){
// 	gulp.src('src/js/*.js')
// 	.pipe(concat('all.js'))
// 	.pipe(uglify())
// 	.pipe(gulp.dest('dist/js'));
// });
gulp.task('css',function(){
	gulp.src(app.srcPath+"css/*.css")
	.pipe(gulp.dest(app.devPath))
	.pipe($.cssnano())
	.pipe(gulp.dest(app.prdPath))
	.pipe(browserSync.stream());

})