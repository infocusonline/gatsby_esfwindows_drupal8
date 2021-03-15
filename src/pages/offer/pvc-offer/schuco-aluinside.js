import React from 'react'
import Layout from '../../../components/Layout'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const AluInside = () => {
  const data = useStaticQuery(graphql`
    query {
      nodePvcOfferSchucoWindows(
        id: { eq: "6e8e9aef-385e-51c5-8b98-a103a14247af" }
      ) {
        title
        body {
          value
        }
        field_text {
          value
        }
        field_schuco_window_link {
          title
          uri
        }
      }
    }
  `)
  const littleImages = data.nodePvcOfferSchucoWindows.field_text[0].value

  return (
    <Layout>
      <Container>
        <h1>{data.nodePvcOfferSchucoWindows.title}</h1>
      </Container>
      <ParagraphBlock
        dangerouslySetInnerHTML={{
          __html: data.nodePvcOfferSchucoWindows.body.value,
        }}
      ></ParagraphBlock>
      <FlexContainer>
        <div dangerouslySetInnerHTML={{ __html: littleImages }}></div>
      </FlexContainer>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  margin-top: 90px;
  /* height: 500px; */
  margin-bottom: 80px;

  h1 {
    margin-top: 90px;
    padding-left: 30px;
    margin-left: 20px;
    font-size: 50px;
  }
`

const ParagraphBlock = styled.div`
  .paragraph-block {
    display: flex;
  }

  p {
    margin: 0 auto;
    padding: 25px;
  }
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

export default AluInside
