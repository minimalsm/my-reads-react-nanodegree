import React from 'react'
import Book from '../../Book'

const Bookshelf = ({ books, status, changeShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{status}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">

          {
            books.map((book) => (
              <li key={book.id}>
                <Book changeShelf={changeShelf} book={book}/>
              </li>
            ))
          }

        </ol>
      </div>
    </div>
  )
}

export default Bookshelf