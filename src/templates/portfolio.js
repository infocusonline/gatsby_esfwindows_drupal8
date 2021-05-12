import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/HomePage/Layout'
import Img from 'gatsby-image'
import Head from '../components/HomePage/Head'
import styled from 'styled-components'

export const query = graphql`
  query($slug: String!) {
    nodeBlog(fields: { slug: { eq: $slug } }) {
      title
      body {
        value
      }
      created
      relationships {
        field_blog_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  // console.log(data, 'blog image')
  const post = data.nodeBlog
  const image =
    data.nodeBlog.relationships.field_blog_image[0]?.localFile?.childImageSharp
      ?.fluid
  // console.log(image, 'hreer is the image')
  return (
    <Layout>
      <PortfolioLayout>
        <Head title={data.nodeBlog.title} />
        <h1>{data.nodeBlog.title}</h1>
        {image ? (
          <div>
            <Img fluid={image} />
            <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
          </div>
        ) : null}
      </PortfolioLayout>
    </Layout>
  )
}

const PortfolioLayout = styled.div`
  max-width: 89 0px;
  /* margin: 0 auto; */
  padding-top: 100px;
  h1 {
    text-align: center;
  }

  p {
    line-height: 1.5;
    padding-top: 40px;
    margin-bottom: 30px;
  }
`

export default Blog
