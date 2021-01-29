import React from 'react'
import Layout from '../../../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import FormOptionTwo from '../../../components/forms/FormOptionTwo'
import styled from 'styled-components'

const LivingSlide = () => {
  const data = useStaticQuery(graphql`
    query {
      nodePvcOfferSlidingWindows(
        id: { eq: "9bb5c866-0d8d-5d6f-9f90-5738fc0c8b8e" }
      ) {
        title
        field_pvc_offer_sliding_windows_ {
          title
          uri
        }
      }
    }
  `)
  console.log(data)
  const videoTitle =
    data.nodePvcOfferSlidingWindows.field_pvc_offer_sliding_windows_[0].title

  const videoLink =
    data.nodePvcOfferSlidingWindows.field_pvc_offer_sliding_windows_[0].uri

  return (
    <Layout>
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

export default LivingSlide
