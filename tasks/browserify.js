module.exports = function(gulp, options) {

    var browserify = require('browserify');
    var source = require('vinyl-source-stream');

    var taskname = 'browserify';

    gulp.desc(taskname, 'bundle javascript application with browserify');

    var fn = function() {
        var entry = options.path.build_src + options.browserify.app;

        var b = browserify({entries: entry});

        for(var i=0; i < options.transforms.length; i++){
            var transform_func = require(options.transforms[i]);
            b = b.transform(transform_func);
        }

        return b.bundle({ debug: options.browserify.debug })
            .pipe(source(options.browserify.output))
            .pipe(gulp.dest(options.path.dist));
    };

    gulp.task(taskname, fn);
};
