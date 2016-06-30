
'use strict';

module.exports = function () {
    $.gulp.task('svgSprite', function () {
        var config = {
            mode: {
                symbol: {
                    dest: '.',
                    sprite: 'sprite.svg'
                }
            },
            shape: {
                spacing: {
                    padding: 0,
                    box: 'content'
                }
            }
        };
        return $.gulp.src('./source/icons/*.svg')
            .pipe($.gp.svgSprite(config))
            //.pipe($.rsp.remove({ properties: [$.rsp.PROPS_FILL] }))
            .pipe($.gp.cheerio({
                    run: ($) => {
                        $('[fill]').removeAttr('fill');
                        $('[style]').removeAttr('style');
                    },
                    parserOptions: {
                        xmlMode: true
                    }
                }))
            .pipe($.gulp.dest($.config.root + '/assets/icons'));
    });
};