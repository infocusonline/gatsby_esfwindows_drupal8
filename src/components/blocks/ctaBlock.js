import React from 'react'
import { graphql } from 'gatsby'

export const CtaBlockQuery = graphql`
  query {
    allBlockContentCtaBlock {
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

const CallToActions = ({ CTADATA }) => {
  return (
    <div>
      {' '}
      <h3>CTA Heading</h3>
      <p>CTA Text goes here and here and here.</p>
      //{CTADATA}
    </div>
  )
}

export default CallToActions
