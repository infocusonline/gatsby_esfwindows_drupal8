import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Img from 'gatsby-image'

const Accessories = () => {
  const data = useStaticQuery(graphql`
    query {
      accessoriesBasicPageImage: nodePage(
        id: { eq: "5777f841-acbe-572d-b820-7d2b4f6caf48" }
      ) {
        title
        body {
          value
        }
        relationships {
          field_basic_page_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1080, maxHeight: 460) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }

      allNodeAccessories {
        edges {
          node {
            title
            body {
              value
            }
            fields {
              slug
            }
            relationships {
              field_accessories_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 420, maxHeight: 420) {
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
  const accessoriesImage =
    data.accessoriesBasicPageImage.relationships.field_basic_page_image[0]
      .localFile.childImageSharp.fluid
  const about = data.accessoriesBasicPageImage.body.value
  return (
    <Layout>
      <Img fluid={accessoriesImage} />
      <About>
        <h1>{data.accessoriesBasicPageImage.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: about }}></div>
      </About>
      <FlexContainer>
        {data.allNodeAccessories.edges.map(edge => {
          const images =
            edge.node.relationships.field_accessories_image[0].localFile
              .childImageSharp.fluid
          return (
            <li key={edge.node.title}>
              <Link to={`/accessories/${edge.node.fields.slug}`}>
                <h2>{edge.node.title} </h2>

                <SetImg fluid={images} />
              </Link>
            </li>
          )
        })}
      </FlexContainer>
    </Layout>
  )
}

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

export default Accessories
