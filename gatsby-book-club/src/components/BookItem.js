import React from "react"
import styled from "styled-components"

const BookItemWrapper = styled.section`
  border: 1px solid #ddd;
  padding: 8px;
  margin-bottom: 8px;
  background: #fff;

  h2 {
    small {
      font-size: 14px;
      padding-left: 8px;
    }
  }
`

const bookItemImageWrapper

const BookItem = ({
  bookTitle,
  bookSummary,
  authorName,
  bookCover,
  children,
}) => {
  return (
    <BookItemWrapper>
      <img src={bookCover} alt="bookCover" srcset="" />
      <h2>
        {bookTitle}
        <small>{authorName}</small>
      </h2>
      <p>{bookSummary}</p>
      <div>{children}</div>
    </BookItemWrapper>
  )
}

export default BookItem
