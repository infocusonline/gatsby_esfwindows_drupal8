import React from 'react'
import Img from 'gatsby-image'

import Layout from '../../../components/Layout'
import { useStaticQuery, Link } from 'gatsby'

const Window = () => {
  const data = useStaticQuery(graphql`
    query {
      nodePvcOfferSubItems(id: { eq: "03d3e3aa-a1b3-57e9-9a59-bdcb83d8400d" }) {
        title
        body {
          value
        }
        relationships {
          field_pvc_offer_subitems_image {
            localFile {
              childImageSharp {
                fixed(width: 1080, height: 400) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(
    data.nodePvcOfferSubItems,
    'here is the window side of the data you need to query'
  )

  const pageBody = data.nodePvcOfferSubItems.body.value
  const pageImage =
    data.nodePvcOfferSubItems.relationships.field_pvc_offer_subitems_image
      .localFile.childImageSharp.fixed
  return (
    <Layout>
      <h1>this is the window component that will hold window item data</h1>
      <h1>{data.nodePvcOfferSubItems.title}</h1>
      <div>
        <p dangerouslySetInnerHTML={{ __html: pageBody }}></p>
      </div>
      <div>
        <Img fixed={pageImage} />
      </div>
    </Layout>
  )
}

export default Window
