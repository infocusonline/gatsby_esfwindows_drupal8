import React from 'react'
import { graphql } from 'gatsby'

export const CtaBlockQuery = graphql`
  query {
    allBlockContentCtaBlock {
      nodes {
        field_cta_heading
        field_cta_link {
          uri
          title
        }
        relationships {
          field_cta_content_type {
            title
          }
        }
        body {
          value
        }
      }
    }
  }
`

const CallToActions = ({ data }) => {
  return (
    <div>
      {' '}
      <h3>CTA Heading</h3>
      <p>CTA Text goes here and here and here.</p>
      <a href="http://example.com">Link Text</a>
    </div>
  )
}

export default CallToActions
