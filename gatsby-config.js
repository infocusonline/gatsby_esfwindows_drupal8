/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Esfwindows',
    author: 'Miguel',
  },

  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'G-2TGZNHY4DPS',
        // this option places the tracking script into the head of the DOM
        head: true,
        anonymize: true,
      },

      // resolve: `gatsby-plugin-prefetch-google-fonts`,
      // options: {
      //   fonts: [
      //     {
      //       family: `Lora`,
      //       subsets: [`latin`],
      //     },
      //     {
      //       family: `Open Sans`,
      //       variants: [`400`, `700`],
      //     },
      //   ],
      // },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-source-drupal',
      options: {
        baseUrl: 'https://dev-esfwindows.pantheonsite.io/',
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },

    'gatsby-image',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: true,
            },

            resolve: `gatsby-remark-images-medium-zoom`,
          },
        ],
      },
    },
  ],
  /* Your site config here */
}
