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
      allNodeMaterials {
        edges {
          node {
            id
            title
            fields {
              slug
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

      materialsAluminumPage: allNodeMaterialsAluminumContent {
        edges {
          node {
            id
            title
            fields {
              slug
            }
          }
        }
      }
    }
  `)

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
          {data.allNodeMaterials.edges.map(edge => {
            const images =
              edge.node.relationships.field_materials_images[0].localFile
                .childImageSharp.fluid
            const links = (
              <Link to={`/materials/${edge.node.fields.slug}`}></Link>
            )

            const aluLink = <Link to={'/materials/aluminum'}> </Link>
            console.log('HERE IS THIS LINK', links.props.to)
            // checking aluLink here
            console.log(aluLink.props.to, '99977')

            return (
              <li>
                <Link to={links.props.to}>
                  {links.props.to === '/materials/aluminum' &&
                    console.log('this is aluminun page')}
                  {console.log(Link)}
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
