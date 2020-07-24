import React, { useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route, Link } from 'react-router-dom'
import Header from './components/Header'
import SearchPage from './components/SearchPage'
import './App.css'
import Bookshelves from './components/Bookshelves/Bookshelves'

const BooksApp = () => {
  const [ showSearchPage, setShowSearchPage ] = useState(true)
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
  
        <Route exact path='/' render={() => (
          <Bookshelves books={books} changeShelf={changeShelf} />
        )}/>

        <Route path='/search' component={SearchPage} />
  
        <div className="open-search">
          <Link 
            to='/search'
            className='open-search'
          >
            Open Search
          </Link>
        </div>
        </div>
  )
}

export default BooksApp
