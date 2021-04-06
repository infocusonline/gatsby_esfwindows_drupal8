import React from 'react'
import Layout from '../../components/Layout'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { graphql, useStaticQuery, Link } from 'gatsby'

const AluCladDoors = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeAluCladDoor {
        edges {
          node {
            title
            relationships {
              field_door_aluclad_img {
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
  console.log(data.allNodeAluCladDoor, 'this is data from alu clad door')
  return (
    <div>
      <Layout>
        <h1>alu clad doors items here</h1>

        <FlexContainer>
          {data.allNodeAluCladDoor.edges.map(edge => {
            const images =
              edge.node.relationships.field_door_aluclad_img[0]?.localFile
                ?.childImageSharp?.fixed

            return (
              <li>
                {/* turn into template */}
                <Link to="/templatenotfound">
                  <SetImg fixed={images} />
                  <h2>{edge.node.title}</h2>
                </Link>
              </li>
            )
          })}
        </FlexContainer>
      </Layout>
    </div>
  )
}

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
    width: 220px;
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

export default AluCladDoors
