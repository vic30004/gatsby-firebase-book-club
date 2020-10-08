import React from "react"
import styled from "styled-components"

const BookItemWrapper = styled.section`
  border: 1px solid #ddd;
  padding: 8px;
  margin-bottom: 8px;
  background: #fff;
  display:flex;

  h2 {
    small {
      font-size: 14px;
      padding-left: 8px;
    }
  }
`

const BookItemImageWrapper = styled.div`
max-width:200px;

img{
  max-width:200px;
}
`

const BookItemContentWrapper = styled.div`
flex-grow:1;
padding-left:8px;
`

const BookItem = ({
  bookTitle,
  bookSummary,
  authorName,
  bookCover,
  children,
}) => {
  return (
    <BookItemWrapper>
      <BookItemImageWrapper>
            <img src={bookCover} alt="bookCover" srcset="" />

      </BookItemImageWrapper>
      <BookItemContentWrapper>
      <h2>
        {bookTitle}
        <small>{authorName}</small>
      </h2>
      <p>{bookSummary}</p>
      <div>{children}</div>
      </BookItemContentWrapper>
    </BookItemWrapper>
  )
}

export default BookItem
