import React from 'react'
import Bookshelves from './Bookshelves'
import Header from './Header'

const ListBook = ({ books, setShowSearchPage, changeShelf }) => {
  return (
    <div className="list-books">
      <Header />
      <Bookshelves changeShelf={changeShelf} books={books} />

      <div className="open-search">
        <button onClick={() => setShowSearchPage(true)}>Add a book</button>
      </div>
    </div>
  )
}

export default ListBook