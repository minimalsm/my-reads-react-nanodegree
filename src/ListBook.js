import React from 'react'
import Bookshelves from './Bookshelves'

const ListBook = ({ books, setShowSearchPage }) => {
  return (
    <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
        
          <div className="list-books-content">
            <div>

              <Bookshelves books={books} />
             

            </div>
          </div>
          <div className="open-search">
            <button onClick={() => setShowSearchPage(true)}>Add a book</button>
          </div>
        </div>
  )
}

export default ListBook