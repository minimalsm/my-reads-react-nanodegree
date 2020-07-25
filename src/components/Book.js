import React from 'react'

const Book = ({ book, changeShelf }) => {

  const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : null
  const onChangeShelf = ({ target }) => {
    const shelf = target.value

    const updatedBook = {
      ...book,
      shelf
    }

    changeShelf(updatedBook, shelf)
  }


  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <select onChange={onChangeShelf} value={book.shelf}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{ book.title }</div>
      {book.authors && <div className="book-authors">{ book.authors[0] }</div>}
    </div>
  )
}

export default Book