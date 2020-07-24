import React from 'react'
import Bookshelf from './Bookshelf/Bookshelf'

const Bookshelves = ({ books, changeShelf }) => {

  const currentlyReading = books.filter(book => book.shelf === 'currentlyReading' )
  const wantToRead = books.filter(book => book.shelf === 'wantToRead' )
  const read = books.filter(book => book.shelf === 'read' )

  return (
    <div className="list-books">
      <div className="list-books-content">
        <div>
          <Bookshelf changeShelf={changeShelf} books={currentlyReading} status='Currently Reading' />
          <Bookshelf changeShelf={changeShelf} books={wantToRead} status='Want to Read'/>
          <Bookshelf changeShelf={changeShelf} books={read} status='Read' />
        </div>
      </div>
    </div>
  )
}

export default Bookshelves