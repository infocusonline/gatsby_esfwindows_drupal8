import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare'

const Footer = () => {
  return (
    <Container>
      <div>
        <p>Esfwindows</p>
        <h3>
          Follow us on
          <a
            href="https://www.linkedin.com/company/eurostar-fenestration-llc"
            target="_blank"
            rel="noreferrer"
          >
            <Icon />
          </a>
        </h3>
      </div>
    </Container>
  )
}

const Icon = styled(LinkedinSquare)`
  color: white;
  margin: 6px;
  width: 40px;
  text-decoration: none;
  &:hover {
    background-color: transparent;
    color: grey;
  }
`

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282828;
  /* margin-top: 1rem; */
  padding-bottom: 10px;
  text-align: center;

  p,
  h3 {
    font-family: 'Lora';
    color: white;
    padding: 1rem;
  }
`

export default Footer
