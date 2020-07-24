import React from 'react'
import Bookshelf from './Bookshelf'

const Bookshelves = ({ books }) => {

  const currentlyReading = books.filter(book => book.shelf === 'currentlyReading' )
  const wantToRead = books.filter(book => book.shelf === 'wantToRead' )
  const read = books.filter(book => book.shelf === 'read' )


  return (
    <div>
      <Bookshelf books={currentlyReading} status='Currently Reading' />
      <Bookshelf books={wantToRead} status='Want to Read'/>
      <Bookshelf books={read} status='Read' />
    </div>
  )
}

export default Bookshelves