import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../../components/Layout'

const WoodProducts = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeOfferType2 {
        edges {
          node {
            title
            fields {
              slug
            }
            relationships {
              field_offer_type_2_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 600, maxHeight: 280) {
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
  console.log(data, 'our data')
  return (
    <Layout>
      <FlexContainer>
        {data.allNodeOfferType2.edges.map(edge => {
          const images =
            edge.node.relationships.field_offer_type_2_image[0]?.localFile
              ?.childImageSharp.fluid
          return (
            <li>
              <Link to={edge.node.fields.slug}>
                {images ? (
                  <div>
                    <SetImg fluid={images} />
                  </div>
                ) : (
                  <p>Image pending</p>
                )}
                <h2>{edge.node.title}</h2>
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
  justify-content: center;
  padding: 0.6rem;
  margin: 90px;

  li {
    list-style-type: none;
    padding: 10px;
  }

  h2 {
    color: #2d385b;
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
    text-align: left;
    padding-bottom: 15px;
    border-bottom: solid 1px blue;
    width: 190px;
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
  width: 330px;
  border-radius: 2%;
`

export default WoodProducts
