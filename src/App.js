import React, { useState, useEffect } from 'react'
import * as BooksAPI from './components/BooksAPI'
import Book from './components/Book'
import SearchPage from './components/SearchPage'
import ListBook from './components/ListBook'
// import * as BooksAPI from './BooksAPI'
import './App.css'

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
      {showSearchPage ? (
        <SearchPage showSearchPage={() => setShowSearchPage()} />
      ) : (
        <ListBook changeShelf={changeShelf} books={books} showSearchPage={() => setShowSearchPage()}/>
      )}
    </div>
  )

}

export default BooksApp
