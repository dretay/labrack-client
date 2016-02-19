exports.config =
  modules: [
    "browserify"
    "jshint"
    "csslint"
    "live-reload"
    "bower"
    "stylus"
    "jade"
    "copy"
    # "react"
    "server"
    "jade"
    "coffeescript"
    "babel"
  ]
  babel:
    extensions: ['jsx', 'js', 'es6']

  template:
    wrapType: 'common'
    commonLibPath: 'jadeify'
  logger:
    growl:
      enabled: false
  browserify:
    bundles:
      [
        entries: ['javascripts/main.js']
        outputFile: 'bundle.js'
      ]
    shims:
      jquery:
        path: 'javascripts/vendor/jquery/jquery'
        exports: '$'
      marked:
        path: 'javascripts/vendor/marked/marked'
        exports: 'marked'
    aliases:
      templates: 'javascripts/templates'