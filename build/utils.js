const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./config')
const packageConfig = require('../package.json')

exports.resolve = (dir) => {
  return path.join(__dirname, '..', dir)
}

exports.assestPath = _path => {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  
  return path.join(assetsSubDirectory, _path)
}

exports.styleLoaders = ({sourceMap, extract}) => {

  const generateLoaders = loader => {
    let loaders = extract ? ['css', 'postcss'] : ['style', 'css', 'postcss']
    loader && loaders.push(loader)
    let ruleConfig = []
    
    for (let i in loaders) {
      ruleConfig.push({
        loader: `${loaders[i]}-loader`,
        options: {
          sourceMap: sourceMap
        }
      })
    }
  
    return ruleConfig
  }

  const cssLoaders = {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass'),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus')
  }
  
  let rules = []

  if (extract) {
    for (let extension in cssLoaders) {
      rules.push({
        test: new RegExp('\\.' + extension + '$'),
        use: [
          MiniCssExtractPlugin.loader,
          ...cssLoaders[extension]
        ]
      })
    }
  } else {
    for (let extension in cssLoaders) {
      rules.push({
        test: new RegExp('\\.' + extension + '$'),
        use: cssLoaders[extension]
      })
    }
  }

  return rules
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}