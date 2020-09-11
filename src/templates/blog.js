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
              fluid(maxWidth: 400, quality: 100) {
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
  const post = data.nodeBlog
  const noImage = data.nodeBlog.relationships.field_blog_image
  const image = data.nodeBlog.relationships.field_blog_image
  return (
    <Layout>
      <BlogLayout>
        <Head title={data.nodeBlog.title} />
        <h1>{data.nodeBlog.title}</h1>

        {!image ? (
          <div>
            <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
            <h1>No image</h1>
          </div>
        ) : (
          <div>
            <p dangerouslySetInnerHTML={{ __html: post.body.value }}></p>
            {/* <Img fluid={image.localFile.childImageSharp.fluid} /> */}
          </div>
        )}
      </BlogLayout>
    </Layout>
  )
}

const BlogLayout = styled.div`
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
