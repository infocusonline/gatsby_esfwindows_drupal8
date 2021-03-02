import React from 'react'
import Layout from './Layout'
import { useStaticQuery, graphql, Link } from 'gatsby'

const GetMaterials = () => {
  const data = useStaticQuery(graphql`
    query {
      allNodeMaterials(sort: { fields: title }) {
        edges {
          node {
            id
            title
            path {
              alias
            }
          }
        }
      }
    }
  `)

  const getName = data.allNodeMaterials.edges.map(edge => {
    const titles = edge.node.title === 'Aluminum'
    if (titles === 'Aluminum' && titles === 'PVC') {
      return <Link to="/offer">click here</Link>
    }
    return titles
  })

  return (
    <div>
      {getName}
      <Layout>
        <h1>helper compinent</h1>
      </Layout>
    </div>
  )
}

export default GetMaterials
