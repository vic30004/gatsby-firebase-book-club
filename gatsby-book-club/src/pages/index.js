import React from "react"
import { Link, graphql } from "gatsby"
import BookItem from "../components/BookItem"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"

const LinkButton = styled.div`
  text-align: right;
  a {
    padding: 8px;
    background: rebeccapurple;
    color: white;
    border-radius: 8px;
    text-decoration: none;
    transition: background 0.5s ease-in-out;
    &:hover {
      background: indigo;
    }
  }
`

const IndexPage = props => {
  return (
    <Layout>
      {props.data.allBook.edges.map(edge => (
        <BookItem
          key={edge.node.id}
          bookTitle={edge.node.title}
          bookSummary={edge.node.summary}
          authorName={edge.node.author.name}
          bookCover={edge.node.localImage.publicURL}
        >
          <LinkButton>
            <Link to={`/book/${edge.node.id}`}>Join Conversation</Link>
          </LinkButton>
        </BookItem>
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    allBook {
      edges {
        node {
          id
          title
          summary
          localImage {
            publicURL
          }
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
