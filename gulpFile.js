/**
 * Created by liaohui1080 on 16/6/14.
 */
var gulp = require('gulp');
var headerFooter = require('gulp-headerfooter'); //设置公用的头部和尾部
var less = require('gulp-less'); //设置公用的头部和尾部
var notify = require('gulp-notify'); //消息提醒
var plumber = require('gulp-plumber'); //错误提示
var sourcemaps = require('gulp-sourcemaps'); //文件地图
var connect = require('gulp-connect'); //静态服务器


/*模块位置*/
var moduleFile = {

    bootstrap: {
        path: './bower_components/bootstrap/dist',
        css: ['./bower_components/bootstrap/dist/css/bootstrap.css',
            './bower_components/bootstrap/dist/css/bootstrap-theme.css'],

        js: ['./bower_components/bootstrap/dist/js/bootstrap.js'],

        font: ['./bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
            './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
            './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
            './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
            './bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
        ]
    },

    jquery: {
        path: './bower_components/jquery/dist',
        js: ['./bower_components/jquery/dist/jquery.js']
    }

};


/*公共文件目录*/
var publicFile = {
    js: './app/src/public/js/**',
    css: './app/src/public/css/**',
    image: './app/src/public/images/**',
    html: './app/src/html/**/*.html'
};

//gulp.task('default', function () {
//    gulp.src('./app/src/html/**/*.html')
//        //.pipe(headerFooter.header('./app/src/layout/header.html'))
//        //.pipe(headerFooter.footer('./app/src/html/layout/footer.html'))
//        .pipe(gulp.dest('./app/dist/html/'))
//    //.pipe(fs.unlinkSync('./app/dist/layout'));
//});


/*模块处理*/
gulp.task('bootstrap', function () {
    gulp.src(moduleFile.bootstrap.path + '/**')
        .pipe(gulp.dest('./app/publicModule/bootstrap'))
});

gulp.task('jquery', function () {
    gulp.src(moduleFile.jquery.path + '/**')
        .pipe(gulp.dest('./app/publicModule/jquery'))
});


/*公共文件处理*/

gulp.task('html',function () {
    gulp.src(publicFile.html)
        .pipe(headerFooter.header('./app/src/layout/header.html'))
        //.pipe(headerFooter.footer('./app/src/html/layout/footer.html'))
        .pipe(gulp.dest('./app/dist/html/'))
        .pipe(connect.reload());
});

//监控布局, 在布局文件改变的时候, 去调用html 任务
gulp.task('layout',['html'], function () {
    gulp.src('./app/src/layout/*.html')
        .pipe(gulp.dest('./app/src/layout/'))
});


gulp.task('less', function () {
    gulp.src(publicFile.css)
        //当编译less时出现语法错误或者其他异常，会终止watch事件，通常需要查看命令提示符窗口才能知道，
        // 这并不是我们所希望的，所以我们需要处理出现异常并不终止watch事件（gulp-plumber），并提示我们出现了错误（gulp-notify）。

        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/dist/public/css'))
        .pipe(connect.reload());
});


gulp.task('js', function () {
    gulp.src(publicFile.js)
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/dist/public/js'))
        .pipe(connect.reload());
});

gulp.task('image', function () {
    gulp.src(publicFile.image)
        .pipe(gulp.dest('./app/dist/public/images/'))
        .pipe(connect.reload());
});


//静态服务器
gulp.task('connect', function () {
    connect.server({
        root: './app',
        port: 9090,
        livereload: true,
        middleware: function (connect, opt) {
            var Proxy = require('gulp-connect-proxy');//服务器端口扩展
            opt.route = '/proxy';
            var proxy = new Proxy(opt);
            return [proxy];
        }
    });
});

gulp.task('watch', ['html','less','image'], function () {

    gulp.watch(publicFile.js, ['js']);

    gulp.watch(publicFile.html, ['html']);
    gulp.watch(publicFile.css, ['less']);

    gulp.watch(publicFile.image, ['image']);

    gulp.watch('./app/src/layout/*.html', ['layout']);


});


gulp.task('build',['html','less','image','layout'])
gulp.task('server',['watch','connect'])