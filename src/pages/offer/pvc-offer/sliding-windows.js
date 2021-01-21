import React from 'react'
import { useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../../../components/Layout'

const SlidingWindows = () => {
  const data = useStaticQuery(graphql`
    query {
      nodePvcOfferSubItems(id: { eq: "f5d622a2-a5c1-5d90-b2d9-cebe1a52f9b6" }) {
        title
        body {
          value
        }
        relationships {
          field_pvc_offer_subitems_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1080, maxHeight: 550) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  console.log(data, 'pull data here')
  const pageBody = data.nodePvcOfferSubItems.body.value
  const pageImage =
    data.nodePvcOfferSubItems.relationships.field_pvc_offer_subitems_image[1]
      .localFile.childImageSharp.fluid
  return (
    <Layout>
      <Container>
        <h1>{data.nodePvcOfferSubItems.title}</h1>

        <Img fluid={pageImage} />
        <p dangerouslySetInnerHTML={{ __html: pageBody }}></p>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  margin-top: 120px;
  padding: 60px;
  h1 {
    text-align: center;
    padding-bottom: 50px;
    margin: 0 auto;
  }

  h3 {
    text-align: center;
    font-size: 30px;
    color: #2d385b;
  }
`

export default SlidingWindows
