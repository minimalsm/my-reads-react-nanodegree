import React, { useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import SearchPage from './components/SearchPage'
import './App.css'
import Bookshelves from './components/Bookshelves/Bookshelves'

const BooksApp = () => {
  const [ books, setBooks ] = useState([])

  useEffect(() => {
    BooksAPI
      .getAll()
      .then(books => {
        setBooks(books)
      })
  }, [])

  const changeShelf = (changedBook, shelf) => {
    BooksAPI.update(changedBook, shelf)
    setBooks(books.map(book => (book.id === changedBook.id) ? changedBook : book))
  }

  return (
    <div className="app">
      <Route exact path='/' render={() => (
        <Bookshelves books={books} changeShelf={changeShelf} />
      )}/>
      <Route path='/search' render={() => (
        <SearchPage books={books} />
      )}/>
    </div>
  )
}

export default BooksApp
