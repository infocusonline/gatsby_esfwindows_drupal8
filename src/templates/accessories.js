import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Container, RalClassicColours } from '../components/styles/accessories'

const Accessories = () => {
  return (
    <Layout>
      <h1>add blocks here</h1>
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
