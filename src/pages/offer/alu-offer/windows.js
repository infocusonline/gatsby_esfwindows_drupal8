import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../../../components/Layout'

const AluWindows = () => {
  const data = useStaticQuery(graphql`
    query {
      nodeAluOfferSubItems(id: { eq: "af3604bf-bc86-5ddc-8da8-cbccaa780455" }) {
        title
        body {
          value
        }
        relationships {
          field_alu_offer_sub_items_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 100, maxHeight: 200) {
                  base64
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Layout>
      <h1>info blocks here</h1>
    </Layout>
  )
}

export default AluWindows
