import React from 'react'
import Layout from '../components/Layout'
import { Link, graphql } from 'gatsby'

import CtaBlock from '../components/blocks/ctaBlock'

export const query = graphql`
  query($slug: String!) {
    nodeMaterials(fields: { slug: { eq: $slug } }) {
      id
      title
      body {
        value
      }
      fields {
        slug
      }
    }
    callToAction: allBlockContentCtaBlock {
      edges {
        node {
          field_cta_link {
            uri
            title
          }
          field_cta_heading
          relationships {
            field_cta_content_type {
              title
            }
          }
        }
      }
    }
  }
`

const Materials = ({ data }) => {
  console.log(data, 'HJIHIHIU')

  return (
    <div>
      <Layout>
        <h1>Materials template is here</h1>

        <h1>hello this is {data.nodeMaterials.title}</h1>
        <h3>{data.nodeMaterials.body.value}</h3>
        <h3>{data.callToAction.node}</h3>
      </Layout>
    </div>
  )
}

export default Materials
