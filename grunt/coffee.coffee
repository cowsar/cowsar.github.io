# COFFEE
module.exports = ->
    build:
        options:
            sourceMap: true
        expand: true
        cwd:    'js/'
        src:    '**/*.coffee'
        dest:   'js/'
        ext:    '.js'