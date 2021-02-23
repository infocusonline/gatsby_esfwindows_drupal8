import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby'

export const query = graphql`
  query($slug: String!) {
    nodeEntranceDoors(fields: { slug: { eq: $slug } }) {
      id
      title
      body {
        value
      }
      fields {
        slug
      }
      relationships {
        field_entrance_door_type {
          localFile {
            childImageSharp {
              fluid(maxWidth: 980, maxHeight: 460) {
                base64
              }
            }
          }
        }
      }
    }
  }
`

const EntranceDoors = ({ data }) => {
  console.log(data, 'dadtat')
  const body = data.nodeEntranceDoors.body.value
  return (
    <div>
      <Layout>
        <Container>
          <h2>{data.nodeEntranceDoors.title}</h2>

          <BodyContainer
            dangerouslySetInnerHTML={{ __html: body }}
          ></BodyContainer>
        </Container>
      </Layout>
    </div>
  )
}

const Container = styled.div`
  margin: 0 auto;
  // border: 1px solid red;
  h2 {
    padding-top: 60px;
    margin-top: 90px;
  }
`
const BodyContainer = styled.div`
  max-width: 1030px;
  // padding: 120px;
  margin: 0 auto;
`

export default EntranceDoors
