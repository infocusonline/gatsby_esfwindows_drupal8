import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
// import MaterialAluminum from '../pages/materials-aluminum'

export const query = graphql`
  query($slug: String!) {
    nodeMaterials(fields: { slug: { eq: $slug } }) {
      id
      title
      body {
        value
      }
      fields {
        slug
      }
      relationships {
        field_materials_images {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1270, maxHeight: 620) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const Materials = ({ data }) => {
  console.log('data from materials aluminum page', data)
  const materialItemImage =
    data.nodeMaterials.relationships.field_materials_images[0].localFile
      .childImageSharp.fluid

  return (
    <div>
      <Layout>
        <Img fluid={materialItemImage} />
        <About>
          <div style={{ paddingTop: '200px' }}>
            <h1>{data.nodeMaterials.title}</h1>
          </div>
          <h3
            dangerouslySetInnerHTML={{ __html: data.nodeMaterials.body.value }}
          ></h3>
        </About>

        <FlexContainer>
          <p>
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old. Richard McClintock, a Latin professor at Hampden-Sydney College
            in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
            Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32.
          </p>
        </FlexContainer>
        {/* <MaterialAluminum /> */}
      </Layout>
    </div>
  )
}

// styled comonents

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

export default Materials
