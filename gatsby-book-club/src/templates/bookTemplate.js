import React, { useContext } from "react"
import BookItem from "../components/BookItem"
import Layout from '../components/layout'
import {graphql} from 'gatsby'
const BookTemplate = props => {
  const { title, summary,author,localImage } = props.data.book
  return (
    <Layout>
      <BookItem
        authorName={author.name}
        bookSummary={summary}
        bookTitle={title}
        bookCover={localImage.childImageSharp.fixed}
      />
    </Layout>
  )
}

export const query = graphql`
  query BookQuery($bookId: String!) {
    book(id: { eq: $bookId }) {
      title
      summary
      localImage {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      author {
        name
      }
    }
  }
` 

export default BookTemplate
