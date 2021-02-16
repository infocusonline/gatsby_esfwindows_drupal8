import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../../components/Layout'

const EntranceDoors = () => {
  const data = useStaticQuery(graphql`
    query {
      nodeOfferType(id: { eq: "0c3afb53-4425-5abb-925c-a9aee2534cf0" }) {
        title
        body {
          value
        }
        relationships {
          field_offer_type_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1900, maxHeight: 890) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      # Query to Map through array of entrance doors
      allNodeEntranceDoors(sort: { fields: title }, skip: 1) {
        edges {
          node {
            id
            title
            fields {
              slug
            }
            relationships {
              field_entrance_door_type {
                localFile {
                  childImageSharp {
                    fixed(height: 300, width: 390) {
                      ...GatsbyImageSharpFixed
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
  //   console.log(data.allNodeEntranceDoors, ' thiis os the data')
  const title = data.nodeOfferType.title
  const pageBody = data.nodeOfferType.body.value
  const pageImage =
    data.nodeOfferType.relationships.field_offer_type_image[0].localFile
      .childImageSharp.fluid
  return (
    <Layout>
      <Title>{title}</Title>
      <ImageContainer>
        <BodyImg fluid={pageImage} />
      </ImageContainer>
      <Body dangerouslySetInnerHTML={{ __html: pageBody }}></Body>
      <FlexContainer>
        <li>
          <Link to={'offer/avindoor-avangarde'}>
            Custom component of Avidoor Avangarde
          </Link>
        </li>
        {data.allNodeEntranceDoors.edges.map(edge => {
          const images =
            edge.node.relationships.field_entrance_door_type[0].localFile
              .childImageSharp.fixed
          return (
            <li>
              <Link to={`/entrance-doors/${edge.node.fields.slug}`}>
                <SetImg fixed={images} />
                <h2>{edge.node.title}</h2>
              </Link>
            </li>
          )
        })}
      </FlexContainer>
    </Layout>
  )
}

const Title = styled.h2`
  margin-top: 120px;
  text-align: center;
`

const Body = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  padding: 20px;
`
const ImageContainer = styled.div`
  padding: 40px;
`

// displays image center
const BodyImg = styled(Img)`
  display: block !important;
  height: auto;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
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
  width: 100%;
  height: auto;
`

export default EntranceDoors
