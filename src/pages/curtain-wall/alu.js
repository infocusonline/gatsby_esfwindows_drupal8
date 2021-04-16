import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import Img from 'gatsby-image'

const CurtainWallAlu = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeCurtainWallTypeAlu {
        edges {
          node {
            id
            title
            relationships {
              field_curtain_alu_img {
                localFile {
                  childImageSharp {
                    fixed(width: 300, height: 300) {
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
  return (
    <Layout>
      <FlexContainer>
        {data.allNodeCurtainWallTypeAlu.edges.map(edge => {
          const images =
            edge.node.relationships.field_curtain_alu_img[0]?.localFile
              ?.childImageSharp.fixed
          return (
            <li>
              <Link to="/notfound">
                <SetImg fixed={images} />
                <h2>{edge.node.title}</h2>
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
  width: 100%;
  height: auto;
`

export default CurtainWallAlu
