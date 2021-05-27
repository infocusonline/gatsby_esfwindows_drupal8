import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Custom = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeCustom {
        edges {
          node {
            id
            title
            body {
              value
            }
            fields {
              slug
            }
            relationships {
              field_custom_image {
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
      customBasicPage: nodePage(
        id: { eq: "623fad50-6b1f-588c-876c-cbb568b8d60d" }
      ) {
        title
        body {
          value
        }
        relationships {
          field_basic_page_image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 870, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  const basicPageImage =
    data.customBasicPage.relationships.field_basic_page_image[0].localFile
      .childImageSharp.fluid
  const title = data.customBasicPage.title
  const body = data.customBasicPage.body.value

  return (
    <>
      <Layout>
        <Img fluid={basicPageImage} />
        <About>
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: body }}></p>
        </About>

        <FlexContainer>
          {data.allNodeCustom.edges.map(edge => {
            const customTitle = edge.node.title
            const customImage =
              edge.node.relationships.field_custom_image[0].localFile
                .childImageSharp.fluid
            const customBody = edge.node.body.value
            return (
              <div key={edge.node.title}>
                <ul>
                  <li>
                    <Link to={`/custom/${edge.node.fields.slug}`}>
                      <>
                        {!customBody || !customImage ? (
                          <div>
                            <SetImg fluid={customImage} />
                            <h1>{customTitle}</h1>
                          </div>
                        ) : (
                          <div>
                            <SetImg fluid={customImage} />
                            <h1>{customTitle}</h1>
                          </div>
                        )}
                      </>
                    </Link>
                  </li>
                </ul>
              </div>
            )
          })}
        </FlexContainer>
      </Layout>
    </>
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
  padding: 0.6rem;
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 60px auto;

  h1 {
    font-size: 18px;
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
  border-radius: 50%;
  width: 300px;
  height: 300px;
`

export default Custom
