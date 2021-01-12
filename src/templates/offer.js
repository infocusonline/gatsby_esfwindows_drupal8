import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'

export const query = graphql`
  query($slug: String!) {
    nodeOfferType(fields: { slug: { eq: $slug } }) {
      id
      title
      relationships {
        field_offer_type_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 100, quality: 100) {
                ...GatsbyImageSharpFluid
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

  return (
    <Layout>
      <h1>{data.nodeOfferType.title}</h1>
    </Layout>
  )
}

// const SetImg = styled(Img)`
//   display: block !important;
//   margin: 6px;
//   flex-grow: 1;
//   width: 330px;
//   border-radius: 2%;
// `

export default Offer
