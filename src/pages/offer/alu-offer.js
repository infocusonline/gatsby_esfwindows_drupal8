import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../../components/Layout'

const AluOffer = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeAluOfferSubItems {
        edges {
          node {
            id
            title
            path {
              alias
            }

            relationships {
              field_alu_offer_sub_items_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 550, maxHeight: 550) {
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
        {data.allNodeAluOfferSubItems.edges.map(edge => {
          const images =
            edge.node.relationships.field_alu_offer_sub_items_image.localFile
              .childImageSharp.fluid
          return (
            <div>
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

export default AluOffer
