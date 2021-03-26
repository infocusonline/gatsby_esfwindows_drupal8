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
  // creating ALUOfferWindows template
  const aluOfferWindowsTemplate = path.resolve('./src/templates/alu-offer.js')
  // creating AluOfferSLIDINGDOORS template
  const aluOfferSlidingDoorsTemplate = path.resolve(
    './src/templates/sliding-doors.js'
  )
  // creating shutters template
  const shuttersTemplate = path.resolve('./src/templates/shutters.js')
  // creating entrance door templates
  const entranceDoorsTemplate = path.resolve(
    './src/templates/entrance-doors.js'
  )

  const avidoorAvangardeTemplate = path.resolve(
    './src/templates/avidoor-avangarde.js'
  )

  const accessoriesAndAdditionWindowsTemplate = path.resolve(
    './src/templates/accessories-and-additions-windows.js'
  )

  // creating accessoriesAdditionsDoors template
  const accessoriesAndAdditionDoorsTemplate = path.resolve(
    './src/templates/accessories-and-additions-doors.js'
  )

  // Creating innovative solutions page

  const innovativeSolutionsTemplate = path.resolve(
    './src/templates/innovative-solutions.js'
  )

  const aluronWoodTemplate = path.resolve('./src/templates/alu-clad-wood.js')

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
      allNodeShutters {
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
      allNodeEntranceDoors {
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
      allNodeAvidoorAvangardeItems {
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
      allNodeAccessoriesAndAdditionsWindow {
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

      allNodeAccessoriesAndAdditionsDoors {
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
      allNodeInnovativeSolutionsSubitems {
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
      allNodeAlucladWoodSubItems {
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
    allNodeShutters,
    allNodeEntranceDoors,
    allNodeAvidoorAvangardeItems,
    allNodeAccessoriesAndAdditionsWindow,
    allNodeAccessoriesAndAdditionsDoors,
    allNodeInnovativeSolutionsSubitems,
    allNodeAlucladWoodSubItems,
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
      }),
      allNodeShutters.edges.forEach(({ node }) => {
        createPage({
          component: shuttersTemplate,
          path: `/shutters/${node.fields.slug}`,
          context: {
            slug: node.fields.slug,
          },
        })
      })
    allNodeEntranceDoors.edges.forEach(({ node }) => {
      createPage({
        component: entranceDoorsTemplate,
        path: `/entrance-doors/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    }),
      allNodeAvidoorAvangardeItems.edges.forEach(({ node }) => {
        createPage({
          component: avidoorAvangardeTemplate,
          path: `/avidoor-avangarde/${node.fields.slug}`,
          context: {
            slug: node.fields.slug,
          },
        })
      }),
      allNodeAccessoriesAndAdditionsWindow.edges.forEach(({ node }) => {
        createPage({
          component: accessoriesAndAdditionWindowsTemplate,
          path: `/accessories-and-additions-windows/${node.fields.slug}`,
          context: {
            slug: node.fields.slug,
          },
        })
      }),
      allNodeAccessoriesAndAdditionsDoors.edges.forEach(({ node }) => {
        createPage({
          component: accessoriesAndAdditionDoorsTemplate,
          path: `/accessories-and-additions-doors/${node.fields.slug}`,
          context: {
            slug: node.fields.slug,
          },
        })
      }),
      allNodeInnovativeSolutionsSubitems.edges.forEach(({ node }) => {
        createPage({
          component: innovativeSolutionsTemplate,
          path: `/innovative-solutions/${node.fields.slug}`,
          context: {
            slug: node.fields.slug,
          },
        })
      })
    allNodeAlucladWoodSubItems.edges.forEach(({ node }) => {
      createPage({
        component: aluronWoodTemplate,
        path: `/alu-clad-wood/${node.fields.slug}`,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
