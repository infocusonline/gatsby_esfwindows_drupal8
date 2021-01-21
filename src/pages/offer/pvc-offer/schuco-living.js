import React from 'react'
import Layout from '../../../components/Layout'
import { graphql, Link, useStaticQuery } from 'gatsby'

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
        field_schuco_window_link {
          title
          uri
        }
      }
    }
  `)
  console.log(data)

  const videoLink =
    data.nodePvcOfferSchucoWindows.field_schuco_window_link[0].uri

  console.log(videoLink, 'this is the youtube video')
  const videoTitle =
    data.nodePvcOfferSchucoWindows.field_schuco_window_link[0].title

  return (
    <Layout>
      <h1>{data.nodePvcOfferSchucoWindows.title}</h1>
      <div>
        <p
          dangerouslySetInnerHTML={{
            __html: data.nodePvcOfferSchucoWindows.body.value,
          }}
        ></p>

        <div>
          <h3>Check out this video</h3>

          <iframe
            name="X-Frame-Options"
            value="*"
            width="500"
            height="500"
            src={videoLink}
          ></iframe>
        </div>
      </div>
    </Layout>
  )
}

export default SchucoLiving
