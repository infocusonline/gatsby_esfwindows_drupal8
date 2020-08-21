// import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'

// import styled from 'styled-components'

// const CustomerPortal = ({ image }) => {
//   const data = useStaticQuery(graphql`
//     query {
//       nodePage(id: { eq: "df80ea2c-26d8-5e8e-b2c9-55c5d75dadd7" }) {
//         id
//         title
//         field_basic_page_link {
//           uri
//           title
//         }
//         body {
//           value
//         }
//         relationships {
//           field_basic_page_image {
//             localFile {
//               childImageSharp {
//                 fluid(maxWidth: 600, maxHeight: 600) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `)
//   // console.log(data, 'this is the drupal component')

//   // grabbing image
// const customerPortalImage =
// data.nodePage.relationships.field_basic_page_image[0].localFile
//     .childImageSharp.fluid
//   return (
//     <div>
//       <SetImg fluid={customerPortalImage} image={image} />
//     </div>
//   )
// }

// const SetImg = styled(Img)`
//   @media (min-width: 900px) {
//     display: flex;
//     flex-direction: column-reverse;
//     width: 100%;
//   }
// `

// export default CustomerPortal
