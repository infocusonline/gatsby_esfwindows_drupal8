import React from 'react'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Materials = () => {
  const data = useStaticQuery(graphql`
    query {
      materialBasicPageHeaderImage: nodePage(
        id: { eq: "bbdf6723-50cf-5efd-aebd-35e11c82fa70" }
      ) {
        title
        body {
          value
        }
        relationships {
          field_basic_page_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1575, maxHeight: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allNodeMaterials(sort: { fields: title }) {
        edges {
          node {
            id
            title
            fields {
              slug
            }
            path {
              alias
            }
            relationships {
              field_materials_images {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 420, maxHeight: 240) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
      # individual query to link to ALuminum to offer
      aluminum: nodeMaterials(
        id: { eq: "7fa597da-733f-5966-ad38-37a4dbcdd9f0" }
      ) {
        title
        relationships {
          field_materials_images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  base64
                }
              }
            }
          }
        }
      }
      aluminumCladPVC: nodeMaterials(
        id: { eq: "daa3d026-1de0-5774-82aa-dca4565308bd" }
      ) {
        title
        relationships {
          field_materials_images {
            localFile {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  base64
                }
              }
            }
          }
        }
      }
    }
  `)

  console.log(data.materialsAluminumPage)

  const materialBasicImage =
    data.materialBasicPageHeaderImage.relationships.field_basic_page_image[0]
      .localFile.childImageSharp.fluid
  return (
    <div>
      <Layout>
        <Img fluid={materialBasicImage} />

        <About>
          <h1>Our Materials</h1>
          <p
            dangerouslySetInnerHTML={{
              __html: data.materialBasicPageHeaderImage.body.value,
            }}
          ></p>
        </About>
        <FlexContainer>
          <li>
            <Link to="/offer">Aluminum</Link>
            <Link to="/offer">pvc</Link>
          </li>
        </FlexContainer>

        <FlexContainer>
          {data.allNodeMaterials.edges.map(edge => {
            const images =
              edge.node.relationships.field_materials_images[0].localFile
                .childImageSharp.fluid
            const links = <Link to={`/${edge.node.path.alias}`}></Link>
            return (
              <li>
                <Link to={links.props.to}>
                  <h1>{edge.node.title}</h1>

                  <SetImg fluid={images} />
                </Link>
              </li>
            )
          })}
        </FlexContainer>
      </Layout>
    </div>
  )
}

// styled Components

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

export default Materials
