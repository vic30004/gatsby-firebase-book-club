import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = props => {
  console.log(props.data.allBook.nodes)
  return (
    <Layout>
      {props.data.allBook.edges.map(edge => (
        <div key={edge.node.id}>
          <h2>
            {edge.node.title} - <small>{edge.node.author.name}</small>
          </h2>
          <p>{edge.node.summary}</p>
          <Link to={`/book/${edge.node.id}`}>Join Conversation</Link>
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allBook {
      edges {
        node {
          title
          summary
          author {
            id
            name
          }
        }
      }
    }
  }
`

export default IndexPage
