import React from 'react'
import { Link } from 'react-router-dom'

const SearchButton = () => {
  return (
    <div className="open-search">
    <Link 
      to='/search'
      className='open-search'
    >
      Open Search
    </Link>
  </div>
  )
}

export default SearchButton