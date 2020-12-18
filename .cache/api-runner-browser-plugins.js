module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"G-K9QDK2N016","head":true,"anonymize":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-material-ui/gatsby-browser.js'),
      options: {"plugins":[],"stylesProvider":{"injectFirst":true}},
    },{
      plugin: require('../node_modules/gatsby-remark-images-medium-zoom/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":750,"linkImagesToOriginal":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
