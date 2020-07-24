import React, { useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
import SearchPage from './SearchPage'
import ListBook from './ListBook'
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

  
  return (
    <div className="app">
      {showSearchPage ? (
        <SearchPage showSearchPage={() => setShowSearchPage()} />
      ) : (
        <ListBook books={books} showSearchPage={() => setShowSearchPage()}/>
      )}
    </div>
  )

}

export default BooksApp
