import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'

import styled from 'styled-components'

const OfferPage = () => {
  const data = useStaticQuery(graphql`
    query {
      offerHeaderImage: nodePage(
        id: { eq: "eeb09020-dd27-5aa3-b9c5-7a54bd934cf5" }
      ) {
        id
        title
        relationships {
          field_basic_page_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allNodeOfferType {
        edges {
          node {
            id
            title
            fields {
              slug
            }
            relationships {
              field_offer_type_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 600, maxHeight: 280) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  console.log('data', data.allNodeOfferType)

  const headerOfferImage =
    data.offerHeaderImage.relationships.field_basic_page_image[0].localFile
      .childImageSharp.fluid
  return (
    <Layout>
      <About>
        <h1>{data.offerHeaderImage.title}</h1>
      </About>
      <Img fluid={headerOfferImage} />

      <FlexContainer>
        {data.allNodeOfferType.edges.map(edge => {
          const images =
            edge.node.relationships.field_offer_type_image[0].localFile
              .childImageSharp.fluid
          return (
            <li>
              <Link to={`/offer/${edge.node.fields.slug}`}>
                {images ? (
                  <div>
                    <SetImg fluid={images} />
                    <h2>{edge.node.title}</h2>
                  </div>
                ) : (
                  <div>
                    <p>Image not available</p>{' '}
                  </div>
                )}
              </Link>
            </li>
          )
        })}
      </FlexContainer>
    </Layout>
  )
}

// styles

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
  /* flex-direction: row-reverse; */
  justify-content: center;
  padding: 0.6rem;
  margin: 90px;

  li {
    list-style-type: none;
    padding: 10px;
  }

  h2 {
    color: #2d385b;
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
    text-align: left;
    padding-bottom: 15px;
    border-bottom: solid 1px blue;
    width: 190px;
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`

const SetImg = styled(Img)`
  display: block !important;
  margin: 6px;
  flex-grow: 1;
  width: 330px;
  border-radius: 2%;
`

export default OfferPage
