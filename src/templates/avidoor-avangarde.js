import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import styled from 'styled-components'

export const query = graphql`
  query($slug: String!) {
    nodeAvidoorAvangardeItems(fields: { slug: { eq: $slug } }) {
      id
      title
      body {
        value
      }
      fields {
        slug
      }
    }
  }
`

const AvidoorAvangarde = ({ data }) => {
  console.log(data, 'kjkjkjk')
  const pageBody = data.nodeAvidoorAvangardeItems.body.value
  return (
    <Layout>
      <Container>
        <h3>{data.nodeAvidoorAvangardeItems.title}</h3>

        <BodyContainer
          dangerouslySetInnerHTML={{ __html: pageBody }}
        ></BodyContainer>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  margin: 0 auto;
  // border: 1px solid red;
  h3 {
    padding-top: 60px;
    margin-top: 90px;
  }
`
const BodyContainer = styled.div`
  max-width: 1030px;
  // padding: 120px;
  margin: 0 auto;
`

const FlexContainer = styled.div`
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .flex li {
    list-style-type: none;
    margin: 0 auto;
  }

  p {
    text-align: center;
    width: 120px;
    padding: 10px;
    margin: 0 auto;
  }
`

export default AvidoorAvangarde
