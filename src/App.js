import React, { useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'
import Header from './components/Header'
import SearchPage from './components/SearchPage'
import './App.css'
import Bookshelves from './components/Bookshelves/Bookshelves'

const BooksApp = () => {
  const [ showSearchPage, setShowSearchPage ] = useState(false)
  const [ books, setBooks ] = useState([])

  useEffect(() => {
    BooksAPI
      .getAll()
      .then(books => {
        console.log('Books from hooks', books)
        setBooks(books)
      })
  }, [])

  const changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf)
    setBooks(books.map(book => (book.id === changedBook.id) ? changedBook : book))
  }



  return (
    <div className="app">
    <Header />
      {showSearchPage ? (
        <SearchPage showSearchPage={() => setShowSearchPage()} />
      ) : (
        <Bookshelves books={books} changeShelf={changeShelf} />
        // <div className="open-search">
        // <button onClick={() => setShowSearchPage(true)}>Add a book</button>
        // </div>
      )}
    </div>
  )
}

export default BooksApp
