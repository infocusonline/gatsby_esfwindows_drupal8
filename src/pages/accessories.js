import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Img from 'gatsby-image'

const Accessories = () => {
  const data = useStaticQuery(graphql`
    query {
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

      accessoriesBasicPage: nodePage(
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
    }
  `)
  const accessoriesImage =
    data.accessoriesBasicPage.relationships.field_basic_page_image[0].localFile
      .childImageSharp.fluid
  const about = data.accessoriesBasicPage.body.value
  return (
    <div>
      <Layout>
        <Img fluid={accessoriesImage} />
        <About>
          <h1>{data.accessoriesBasicPage.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: about }}></p>
        </About>
        <FlexContainer>
          {data.allNodeAccessories.edges.map(edge => {
            const images =
              edge.node.relationships.field_accessories_image[0].localFile
                .childImageSharp.fluid
            return (
              <li key={edge.node.title}>
                <Link to={`/accessories/${edge.node.fields.slug}`}>
                  <h2>{edge.node.title}</h2>
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

const About = styled.div`
  padding: 30px;
  margin: 20px auto;

  h1 {
    text-align: center;
  }
`
const FlexContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0.6rem;

  h2 {
    text-align: center;
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
