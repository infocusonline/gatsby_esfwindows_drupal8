import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const MaterialAluminum = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeMaterialsAluminumContent {
        edges {
          node {
            id
            title
            body {
              value
            }
            relationships {
              field_material_link_image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 900, maxHeight: 520) {
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

  console.log('77878787878', data)

  return (
    <div>
      <Layout>
        <h1>this is the material aluminum page</h1>
        {data.allNodeMaterialsAluminumContent.edges.map(edge => {
          console.log(edge, 'grab the image from here')
          const images =
            edge.node.relationships.field_material_link_image[0].localFile
              .childImageSharp.fluid

          return (
            <div>
              <Img fluid={images} />
            </div>
          )
        })}
      </Layout>
    </div>
  )
}

export default MaterialAluminum
