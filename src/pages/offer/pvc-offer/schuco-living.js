import React from 'react'
import Layout from '../../../components/Layout'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import FormOptionTwo from '../../../components/forms/FormOptionTwo'
// import { OfferStyles } from '../../../components/styles/offerStyles'
const SchucoLiving = () => {
  const data = useStaticQuery(graphql`
    query {
      nodePvcOfferSchucoWindows(
        id: { eq: "d0e7a8db-0601-5dcb-a5fc-d8d541981ee9" }
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

  const videoLink =
    data.nodePvcOfferSchucoWindows.field_schuco_window_link[0].uri

  const videoTitle =
    data.nodePvcOfferSchucoWindows.field_schuco_window_link[0].title

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

      <Video>
        <h2 dangerouslySetInnerHTML={{ __html: videoTitle }}></h2>
        <VideoContainer>
          <iframe
            width="60px"
            height="70px"
            align="middle"
            src={videoLink}
          ></iframe>
        </VideoContainer>
      </Video>

      <FormOptionTwo />
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

const Video = styled.div`
  padding-top: 25px;
  h2 {
    margin-top: 100px;
    text-align: center;
  }
`
const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 50.25%;

  iframe {
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 80px;
  }
`

export default SchucoLiving
