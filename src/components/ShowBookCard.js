import React from 'react';

export const ShowBookCard = ({ book, onChoose = f => f }) => {
  const bookBest = book.best_book;


  /*chooseOne = onChoose */
  return (
    <>
    <div className="bookCard" onClick={() => onChoose(book)} style={{maxWidth: '450px'}}>
      <header>
        <h2>{bookBest.title}</h2>
        <p>by {bookBest.author.name}</p>
      </header>
      <img
          alt="Book cover"
          src={bookBest.image_url}/ >
      <div>
        <span>published {book.original_publication_year}
        </span> — <span>{book.average_rating} avg rated
        </span> — <span>{book.ratings_count} ratings
        </span> — <span>{book.text_reviews_count} reviews
        </span> — <span>{book.books_count} editions</span>
      </div>
    </div>
    </>
  )
}

/*
bookBest.image_url
bookBest.small_image_url
bookBest.author.id
bookBest.id
book.id

{book.original_publication_day}
{book.original_publication_month}
*/
