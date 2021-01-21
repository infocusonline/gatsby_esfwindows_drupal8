import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Layout from '../../../components/Layout'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Window = () => {
  const data = useStaticQuery(graphql`
    query {
      nodePvcOfferSubItems(id: { eq: "03d3e3aa-a1b3-57e9-9a59-bdcb83d8400d" }) {
        title
        body {
          value
        }
        relationships {
          field_pvc_offer_subitems_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1600, maxHeight: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allNodePvcOfferSchucoWindows {
        edges {
          node {
            path {
              alias
            }
            title
            relationships {
              field_schuco_windows_image {
                localFile {
                  childImageSharp {
                    fixed(width: 325, height: 325) {
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
  console.log(data, 'here is the window side of the data you need to query')

  const pageBody = data.nodePvcOfferSubItems.body.value
  const pageImage =
    data.nodePvcOfferSubItems.relationships.field_pvc_offer_subitems_image[0]
      .localFile.childImageSharp.fluid
  return (
    <Layout>
      <Container>
        <h1>{data.nodePvcOfferSubItems.title}</h1>
        <ConatinerImg fluid={pageImage} />

        {/* <p dangerouslySetInnerHTML={{ __html: pageBody }}></p> */}
      </Container>

      <FlexContainer>
        {data.allNodePvcOfferSchucoWindows.edges.map(edge => {
          const pvcSchucoImages =
            edge.node.relationships.field_schuco_windows_image[0].localFile
              .childImageSharp.fixed
          {
            return (
              <div>
                <li>
                  <Link to={`/offer/${edge.node.path.alias}`}>
                    <SetImg fixed={pvcSchucoImages} />
                    <h2>{edge.node.title}</h2>
                  </Link>
                </li>
              </div>
            )
          }
        })}
      </FlexContainer>

      <div>
        <h3>Are you Looking for more information?</h3>
      </div>
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
  width: 980px;
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

export default Window
