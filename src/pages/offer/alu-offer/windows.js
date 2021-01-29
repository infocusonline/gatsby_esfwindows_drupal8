import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../../../components/Layout'

const AluWindows = () => {
  const data = useStaticQuery(graphql`
    query {
      #this is a query for the hero image
      nodeAluOfferSubItems(id: { eq: "af3604bf-bc86-5ddc-8da8-cbccaa780455" }) {
        title
        relationships {
          field_alu_offer_sub_items_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1200, maxHeight: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allNodeAluOfferWindows {
        edges {
          node {
            id
            title
            relationships {
              field_alu_offer_windows_image {
                localFile {
                  childImageSharp {
                    fixed(height: 325, width: 325) {
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
  console.log(data)
  const pageImage =
    data.nodeAluOfferSubItems.relationships.field_alu_offer_sub_items_image
      .localFile.childImageSharp.fluid
  return (
    <Layout>
      <Container>
        {data.nodeAluOfferSubItems.title}

        <ConatinerImg fluid={pageImage} />
      </Container>

      <FlexContainer>
        {data.allNodeAluOfferWindows.edges.map(edge => {
          const images =
            edge.node.relationships.field_alu_offer_windows_image[0].localFile
              .childImageSharp.fixed
          console.log(images)
          return (
            <li>
              <Link to="/">
                <h2>{edge.node.title}</h2>
                <SetImg fixed={images} />
              </Link>
            </li>
          )
        })}
      </FlexContainer>
    </Layout>
  )
}

const Container = styled.div`
  display: flex;
  margin-top: 90px;
  /* height: 500px; */
  margin-bottom: 80px;

  h1 {
    margin-top: 90px;
    padding-left: 30px;
    margin-left: 20px;
    font-size: 50px;
  }
`

const ConatinerImg = styled(Img)`
  margin-left: auto;
  order: 2;
  width: auto;
  height: 21vw;
  clip-path: polygon(10vw 0, 100% 0, 100% 100%, 0% 100%);
`

const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: row-reverse; */
  justify-content: space-around;
  padding: 0.6rem;
  margin: 90px;

  div {
    padding-bottom: 160px;
  }

  li {
    list-style-type: none;
  }

  h2 {
    color: #2d385b;
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`

const SetImg = styled(Img)`
  display: block !important;
  flex-grow: 1;
  padding: 149px;
`

export default AluWindows
