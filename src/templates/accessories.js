import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Container, RalClassicColours } from '../components/styles/accessories'

export const query = graphql`
  query($slug: String!) {
    nodeAccessories(fields: { slug: { eq: $slug } }) {
      title
      body {
        value
      }
      relationships {
        field_accessories_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 100, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      relationships {
        node__hardware {
          title
          path {
            alias
          }
          fields {
            slug
          }
          body {
            value
          }
          relationships {
            field_hardware_image {
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
  }
`

const Accessories = ({ data }) => {
  const title = data.nodeAccessories.title
  const body = data.nodeAccessories.body.value
  const image =
    data.nodeAccessories.relationships.field_accessories_image[0].localFile
      .childImageSharp.fluid

  // GRABBING RELATED DATA FROM DRUPAL
  const relatedHardwareContent =
    data.nodeAccessories.relationships.node__hardware

  return (
    <Layout>
      <Container>
        {/* conditonal statement in reactjs. look up docs if confused. */}
        {relatedHardwareContent ? (
          <div>
            <Img fluid={image} />
            <About>
              <h1>{title}</h1>
              <p dangerouslySetInnerHTML={{ __html: body }}></p>
            </About>

            <FlexContainer>
              {relatedHardwareContent.map(hardware => {
                console.log(hardware, 'Mapping over relation data')
                // create variables for each piece of data and display on screen
                const titleRelatedData = hardware.title
                const imageRelatedData =
                  hardware.relationships.field_hardware_image[0].localFile
                    .childImageSharp.fluid
                return (
                  <li>
                    <Link to={`${hardware.path.alias}`}>
                      {console.log(hardware.path.alias, '!!!9999')}
                      <h1>{titleRelatedData}</h1>

                      <SetImg fluid={imageRelatedData} />
                    </Link>
                  </li>
                )
              })}
            </FlexContainer>
          </div>
        ) : (
          <div>
            <h1>{title}</h1>
            {/* <Img fluid={image} /> */}

            <RalClassicColours>
              <p dangerouslySetInnerHTML={{ __html: body }}></p>
            </RalClassicColours>
          </div>
        )}
      </Container>
    </Layout>
  )
}

export default Accessories

// styled components
const FlexContainer = styled.ul`
  padding: 0.6rem;
  display: flex;
  flex-wrap: wrap;

  flex-direction: row;
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

    p {
      text-align: center;
      width: 258px;
      margin: 0 auto;
    }
  }
`

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

const SetImg = styled(Img)`
  display: block !important;
  margin: 6px;
  flex-grow: 1;
  width: 330px;
  border-radius: 2%;
`
