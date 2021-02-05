const path = require('path')

// template slug
module.exports.onCreateNode = ({ node, actions }) => {
  // console.log(JSON.stringify(node, undefined, 3))

  const { createNodeField } = actions
  if (node.internal.owner === 'gatsby-source-drupal') {
    // console.log(JSON.stringify(node, undefined, 3))
    const oldSlug = node.title
    if (node.title == undefined) {
      return null
    }
    // console.log(oldSlug, '@@@))((**&*')
    const slug = oldSlug
      .toLowerCase(oldSlug)
      .split(' ')
      .join('-')
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
  if (node.internal.type === 'menu_link_content__menu_link_content') {
    const navTitle = node.title
    const lowerCaseNav = navTitle
      .toLowerCase(navTitle)
      .split(' ')
      .join('-')
    createNodeField({
      node,
      name: 'lowerCaseMenuTitle',
      value: lowerCaseNav,
    })
  }
}

// creating pages
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('./src/templates/blog.js')
  // creating product template
  const productsTemplate = path.resolve('./src/templates/products.js')
  // creating materials template
  const materialTemplate = path.resolve('./src/templates/materials.js')
  // creating custom page template
  const customTemplate = path.resolve('./src/templates/custom.js')
  // creating accessories template
  const accessoriesTemplate = path.resolve('./src/templates/accessories.js')
  // creating Company/about us page
  const companyTemplate = path.resolve('./src/templates/company.js')
  // creating ALUOfferWindows template
  const aluOfferWindowsTemplate = path.resolve('src/templates/alu-offer.js')
  // creating AluOfferSLIDINGDOORS template
  const aluOfferSlidingDoorsTemplate = path.resolve(
    './src/templates/sliding-doors.js'
  )

  const res = await graphql(`
    query {
      allNodeBlog {
        edges {
          node {
            id
            title
            field_year
            field_month
            fields {
              slug
            }
          }
        }
      }
      allNodeProducts {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeMaterials {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }

      allNodeCustom {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeAccessories {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeCompany {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeAluOfferWindows {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
      allNodeAluOfferSlidingDoors {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  if (res.errors) {
    console.log(res.errors)
  }
  // console.log(JSON.stringify(res, null, 3))
  // destructuring the queries
  const {
    allNodeBlog,
    allNodeProducts,
    allNodeMaterials,
    allNodeCustom,
    allNodeAccessories,
    allNodeAluOfferWindows,
    allNodeAluOfferSlidingDoors,
  } = res.data
  allNodeBlog.edges.forEach(({ node }) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${node.fields.slug}`,
      context: {
        slug: node.fields.slug,
      },
    }),
      // create Products page
      allNodeProducts.edges.forEach(({ node }) => {
        createPage({
          component: productsTemplate,
          path: `/products/${node.fields.slug}`,
          context: {
            slug: node.fields.slug,
          },
        })
      }),
      // creating materials pages
      allNodeMaterials.edges.forEach(({ node }) => {
        createPage({
          component: materialTemplate,
          path: `/materials/${node.fields.slug}`,
          context: {
            slug: node.fields.slug,
          },
        })
      }),
      // creating custom pages
      allNodeCustom.edges.forEach(({ node }) => {
        createPage({
          component: customTemplate,
          path: `/custom/${node.fields.slug}`,
          context: {
            slug: node.fields.slug,
          },
        })
      }),
      allNodeAccessories.edges.forEach(({ node }) => {
        createPage({
          component: accessoriesTemplate,
          path: `/accessories/${node.fields.slug}`,
          context: {
            slug: node.fields.slug,
          },
        })
      })
    allNodeAluOfferWindows.edges.forEach(({ node }) => {
      createPage({
        component: aluOfferWindowsTemplate,
        path: `/alu-offer/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    }),
      allNodeAluOfferSlidingDoors.edges.forEach(({ node }) => {
        createPage({
          component: aluOfferSlidingDoorsTemplate,
          path: `/sliding-doors/${node.fields.slug}`,
          context: {
            slug: node.fields.slug,
          },
        })
      })
  })
}
