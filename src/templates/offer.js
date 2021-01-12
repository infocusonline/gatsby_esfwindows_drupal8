import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'

export const query = graphql`
  query($slug: String!) {
    nodeOfferType(fields: { slug: { eq: $slug } }) {
      id
      title
      body {
        value
      }

      relationships {
        field_offer_type_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 800, maxHeight: 250) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      relationships {
        node__pvc_offer_sub_items_ {
          title
          body {
            value
          }
          relationships {
            field_pvc_offer_subitems_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 100, maxHeight: 200) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const Offer = ({ data }) => {
  console.log(data.nodeOfferType, 'grab the image')
  const image =
    data.nodeOfferType.relationships.field_offer_type_image[0].localFile
      .childImageSharp.fluid

  const relatedContent =
    data.nodeOfferType.relationships.node__pvc_offer_sub_items_
  return (
    <Layout>
      <h1 style={{ marginTop: '100px', textAlign: 'center' }}>
        {data.nodeOfferType.title}
      </h1>
      <Img fluid={image} />
    </Layout>
  )
}

export default Offer
