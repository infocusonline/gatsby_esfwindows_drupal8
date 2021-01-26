import React from 'react'
import Layout from '../../../components/Layout'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'

const Ct70 = () => {
  const data = useStaticQuery(graphql`
    query {
      nodePvcOfferSchucoWindows(
        id: { eq: "bb9efdc6-d258-5371-9ce2-056b52ac307d" }
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
  console.log(data, 'grab data here')
  const littleImages = data.nodePvcOfferSchucoWindows.field_text[0].value

  return (
    <Layout>
      <Container>
        <h1>{data.nodePvcOfferSchucoWindows.title}</h1>
      </Container>
      <ParagraphBlock>
        <p
          dangerouslySetInnerHTML={{
            __html: data.nodePvcOfferSchucoWindows.body.value,
          }}
        ></p>
      </ParagraphBlock>
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

export default Ct70
