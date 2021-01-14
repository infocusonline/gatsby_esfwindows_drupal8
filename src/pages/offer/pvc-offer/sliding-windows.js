import React from 'react'
import { useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

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
  console.log(data, 'pull data here')
  const pageBody = data.nodePvcOfferSubItems.body.value
  const pageImage =
    data.nodePvcOfferSubItems.relationships.field_pvc_offer_subitems_image
      .localFile.childImageSharp.fixed
  return (
    <Layout>
      <h1>{data.nodePvcOfferSubItems.title}</h1>
      <div>ADD IMAGE HERE</div>
      <Img fixed={pageImage} />
      <p dangerouslySetInnerHTML={{ __html: pageBody }}></p>
    </Layout>
  )
}

export default SlidingWindows
