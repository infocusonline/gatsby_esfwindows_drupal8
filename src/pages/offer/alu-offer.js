import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../../components/Layout'

const AluOffer = () => {
  const data = useStaticQuery(graphql`
    query {
      #body of the page
      nodeOfferType(id: { eq: "5ed4cba3-ddf2-5841-a643-a55f63510da1" }) {
        title
        body {
          value
        }
        relationships {
          field_offer_type_image {
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
  // working on pageHeader
  console.log(data)
  const body = data.nodeOfferType.body.value
  const pageBodyImage =
    data.nodeOfferType.relationships.field_offer_type_image[1].localFile
      .childImageSharp.fluid
  return (
    <Layout>
      <h1>{data.nodeOfferType.title}</h1>

      <FlexContainer>
        {data.allNodeAluOfferSubItems.edges.map(edge => {
          const images =
            edge.node.relationships.field_alu_offer_sub_items_image.localFile
              .childImageSharp.fluid
          return (
            <div>
              <li>
                <h2>{edge.node.title}</h2>
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

const Title = styled.div`
  h1 {
    margin-top: 90px;
  }
`

const PageHeader = styled.div`
  margin: 0 auto;

  border: 1px solid red;
  padding: 30px;
  console.l p {
    margin: 0 auto;
    padding: 10px;
  }
`

const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row-reverse; */
  justify-content: space-around;
  padding: 0.6rem;
  margin-top: 190px;

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
