import React, { useState } from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'

const SearchPage = ({ changeShelf, addToBooks }) => {
  const [ searchedBooks, setSearchedBooks ] = useState([])
  const [ searchQuery, setSearchQuery ] = useState('') 

  const searchBook = (query) => {
    console.log('searchBook query: ', query)
    BooksAPI
      .search(query)
      .then((books) => {
        const noneShelf = books.map((book) => {
          return {
            ...book,
            shelf: 'none'
          }
        })
        setSearchedBooks(noneShelf)
      })
      .catch(error => {
        console.log('ERROR', error)
        setSearchedBooks([])
      })
  }

  const handleChange = (query) => {
    setSearchQuery(query)
    onBookSearch(query)
  }

  const onBookSearch = (searchQuery) => {
    ((searchQuery) || (searchQuery !== '')) ? searchBook(searchQuery) : setSearchedBooks([])
  }

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to='/' className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" value={searchQuery} onChange={({target}) => handleChange(target.value)}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">  
        {
          (searchedBooks && searchedBooks.length > 0) ?
          searchedBooks.map((book) => (
            <li key={book.id}>
              <Book changeShelf={changeShelf} book={book} addToBooks={addToBooks} />
            </li>
          ))
          : (<h3>Your search has returend no results</h3>)
        }  
        </ol>
      </div>
    </div>
  )
}

export default SearchPage