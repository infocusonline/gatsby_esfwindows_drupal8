import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

import Layout from '../../../components/Layout'

const SlidingWindows = () => {
  const data = useStaticQuery(graphql`
    query {
      nodePvcOfferSubItems(id: { eq: "f5d622a2-a5c1-5d90-b2d9-cebe1a52f9b6" }) {
        title
        body {
          value
        }
        relationships {
          field_pvc_offer_subitems_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1080, maxHeight: 550) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allNodePvcOfferSlidingWindows {
        edges {
          node {
            id
            title
            path {
              alias
            }
            fields {
              slug
            }
            relationships {
              field_pvc_offer_liftslide_doors {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 400) {
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

  console.log(data, 'pull data here')
  const pageBody = data.nodePvcOfferSubItems.body.value
  const pageImage =
    data.nodePvcOfferSubItems.relationships.field_pvc_offer_subitems_image[1]
      .localFile.childImageSharp.fluid
  return (
    <Layout>
      <Container>
        <h1>{data.nodePvcOfferSubItems.title}</h1>

        <Img fluid={pageImage} />
        <p dangerouslySetInnerHTML={{ __html: pageBody }}></p>
      </Container>

      <div>
        <FlexContainer>
          {data.allNodePvcOfferSlidingWindows.edges.map(edge => {
            const images =
              edge.node.relationships.field_pvc_offer_liftslide_doors[0]
                .localFile.childImageSharp.fluid
            return (
              // change the url alias when you make this page dynamic using template
              <Link to={`/${edge.node.path.alias}`}>
                <h2>{edge.node.title} </h2>

                <SetImg fluid={images} />
              </Link>
            )
          })}
        </FlexContainer>
      </div>
    </Layout>
  )
}

const Container = styled.div`
  margin-top: 120px;
  padding: 50px;
  h1 {
    text-align: center;
    padding-bottom: 50px;
    margin: 0 auto;
  }

  h3 {
    text-align: center;
    font-size: 30px;
    color: #2d385b;
  }
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

export default SlidingWindows
