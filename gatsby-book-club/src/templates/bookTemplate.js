import React, { useContext } from "react"
import BookItem from "../components/BookItem"
import Layout from '../components/layout'
const BookTemplate = props => {
  return (
    <Layout>
      <BookItem
        authorName={props.pageContext.author.name}
        bookSummary={props.pageContext.summary}
        bookTitle={props.pageContext.title}
        bookCover={props.pageContext.imgUrl}
      />
    </Layout>
  )
}

export default BookTemplate
