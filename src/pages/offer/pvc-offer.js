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
  console.log(data)
  return (
    <Layout>
      <FlexContainer>
        {data.allNodePvcOfferSubItems.edges.map(edge => {
          const images =
            edge.node.relationships.field_pvc_offer_subitems_image.localFile
              .childImageSharp.fluid
          return (
            <div>
              <h1>{edge.node.title}</h1>
              <li>
                <Link to={`/${edge.node.path.alias}`}>
                  <SetImg fluid={images} />
                </Link>
              </li>
            </div>
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
  justify-content: space-around;
  padding: 0.6rem;

  h2 {
    text-align: center;
    color: #2d385b;
  }

  li {
    margin: 1rem;
    list-style-type: none;
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
