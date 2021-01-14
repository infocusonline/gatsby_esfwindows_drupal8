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

  const headerOfferImage =
    data.offerHeaderImage.relationships.field_basic_page_image[0].localFile
      .childImageSharp.fluid
  return (
    <Layout>
      <About>
        <h1>Offer</h1>
      </About>
      <Img fluid={headerOfferImage} />

      <FlexContainer>
        {data.allNodeOfferType.edges.map(edge => {
          const images =
            edge.node.relationships.field_offer_type_image[0].localFile
              .childImageSharp.fluid
          return (
            <li>
              <Link to={`/offer/pvc-offer/${edge.node.fields.slug}`}>
                <h1>{edge.node.title}</h1>
                {images ? (
                  <div>
                    <SetImg fluid={images} />
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
  padding: 0.6rem;
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 60px auto;

  h1 {
    color: #2d385b;
    font-size: 1.2rem;
  }

  li {
    margin: 1rem;

    list-style-type: none;
    text-align: center;
    font-weight: 30;
    a {
      text-decoration: none;
      color: #000;
    }
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
