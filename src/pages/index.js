import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import styled from "styled-components"
import Head from "../components/Head"
import Img from "gatsby-image"
import CompanyContent from "../components/CompanyContent"
import WindowContent from "../components/WindowContent"

import SubMenu from "../components/Navbar/SubMenu"

export const query = graphql`
  query {
    nodePage(id: { eq: "096c6f24-2c9d-5534-b8f9-0ed68a782b9e" }) {
      title
      body {
        value
      }
      relationships {
        field_basic_page_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1080, maxHeight: 450) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const Home = ({ data }) => {
  const image =
    data.nodePage.relationships.field_basic_page_image[0].localFile
      .childImageSharp.fluid
  const title = data.nodePage.title
  const quote = data.nodePage.body.value

  return (
    <Layout>
      <Head title="Home" />
      <Hero>
        <Img style={{ marginTop: "-22px" }} fluid={image} />
        <Title>{title}</Title>
        <Quote dangerouslySetInnerHTML={{ __html: quote }}></Quote>
      </Hero>
      <CompanyContent />
      <WindowContent />
    </Layout>
  )
}

const Hero = styled.div`
  /* border: 1px solid red; */
  padding-top: 110px;
  position: relative;
`
const Title = styled.h1`
  position: absolute;
  color: #ffffff;
  margin: 0 auto;
  left: 20%;
  top: 30%;
  text-align: center;
  padding-top: 66px;
  font-weight: 10;
  font-size: 70px;
  font-family: "Times New Roman, Times, Serif";
  @media (max-width: 500px) {
    font-size: 50px;
  }
`

const Quote = styled.h3`
  position: absolute;
  top: 45%;
  left: 20%;
  width: 65%;
  font-size: 50px;
  @media (max-width: 1680px) {
    margin-top: 30px;
    font-size: 60px;
    width: 60%;
    padding-top: 30px;
  }
  @media (max-width: 1150px) {
    font-size: 50px;
    margin-top: 25px;
    width: 50%;
  }
  @media (max-width: 1250px) {
    display: none;
    font-size: 40px;
    margin-top: 25px;
    width: 50%;
  }
`

export default Home
