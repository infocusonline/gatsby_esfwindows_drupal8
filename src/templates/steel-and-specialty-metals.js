import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

import { graphql } from 'gatsby'

export const query = graphql`
  query($slug: String!) {
    nodeSteelAndSpecialityMetals(fields: { slug: { eq: $slug } }) {
      id
      title
      body {
        value
      }

      fields {
        slug
      }
      relationships {
        field_steel_and_special_metal {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1600, maxHeight: 700) {
                base64
              }
            }
          }
        }
      }
    }
  }
`

const SteelSpecialtyMetals = ({ data }) => {
  const body = data.nodeSteelAndSpecialityMetals.body?.value
  return (
    <Layout>
      <Container>
        <h2>{data.nodeSteelAndSpecialityMetals.title}</h2>

        {body ? (
          <BodyContainer
            dangerouslySetInnerHTML={{ __html: body }}
          ></BodyContainer>
        ) : (
          <p>no bio yet</p>
        )}
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  margin: 0 auto;
  // border: 1px solid red;
  h2 {
    padding-top: 60px;
    padding-left: 40px;
    margin-top: 90px;
  }
`

const BodyContainer = styled.div`
  max-width: 1030px;
  // padding: 120px;
  margin: 0 auto;
`

export default SteelSpecialtyMetals
