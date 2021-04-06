import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../../components/Layout'

const PvcOffer = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodePvcOfferSubItems {
        edges {
          node {
            title
            path {
              alias
            }
            relationships {
              field_pvc_offer_subitems_image {
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
  return (
    <Layout>
      <FlexContainer>
        {data.allNodePvcOfferSubItems.edges.map(edge => {
          const images =
            edge.node.relationships.field_pvc_offer_subitems_image[0].localFile
              .childImageSharp.fluid
          return (
            <li>
              <Link to={`/${edge.node.path.alias}`}>
                <SetImg fluid={images} />
                <h2>{edge.node.title}</h2>
              </Link>
            </li>
          )
        })}
      </FlexContainer>
    </Layout>
  )
}

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
  width: 310px;
  border-radius: 2%;
`

export default PvcOffer
