import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from '../components/HomePage/Layout'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Product = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeProducts {
        edges {
          node {
            title
            body {
              value
            }
            fields {
              slug
            }
            relationships {
              field_products_images {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 420, maxHeight: 420) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
      productBasicPage: nodePage(
        id: { eq: "92f28578-015b-5d98-b057-6bb066b3a04a" }
      ) {
        title
        body {
          value
        }
        relationships {
          field_basic_page_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1080, maxHeight: 450) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const productBasicImage =
    data.productBasicPage.relationships.field_basic_page_image[0].localFile
      .childImageSharp.fluid

  return (
    <Layout>
      <HeroImg fluid={productBasicImage} />

      <About>
        <h1>{data.productBasicPage.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: data.productBasicPage.body.value }}
        ></div>
      </About>

      <FlexContainer>
        {data.allNodeProducts.edges.map(edge => {
          const productImages =
            edge.node.relationships.field_products_images[0].localFile
              .childImageSharp.fluid

          return (
            <li key={edge.node.title}>
              <Link to={`/products/${edge.node.fields.slug}`}>
                <h1>{edge.node.title}</h1>
                <SetImg fluid={productImages} />
              </Link>
            </li>
          )
        })}
      </FlexContainer>
    </Layout>
  )
}

// styled components

const HeroImg = styled(Img)`
  margin-top: 4rem;
`

const About = styled.div`
  margin: 0 auto;
  width: 95%;
  padding: 20px;
  h1 {
    padding-top: 1.4rem;

    text-align: center;
  }
  p {
    line-height: 1.6;
    text-align: center;
    color: #848484;
  }
`

const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0.6rem;

  li {
    margin: 1rem;
    list-style-type: none;
    text-align: center;
  }

  h1 {
    color: #2d385b;
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`

const SetImg = styled(Img)`
  display: block !important;
  margin: 6px;
  flex-grow: 1;
  width: 310px;
  border-radius: 2%;
`

export default Product
