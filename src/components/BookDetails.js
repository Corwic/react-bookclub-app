import React, { useState, useContext, useEffect } from 'react';
import { useData } from '../components/BookClubContext';

export const BookDetails = ({  }) => {
  const { teleport, rates, closeRightPanel } = useData();
  const [, { title, author, image_url, goodreads, club } ] = teleport;

  return (
    <div className="bookDetails">
      <header>
        <h2>{title}</h2>
        <p>by {author.name}</p>
      </header>
      <img
          alt="Book cover"
          src={image_url}/ >
      <div>
      {(goodreads?.original_publication_year)
        ? <>
        <span>published {goodreads.original_publication_year}
        </span> — <span>{goodreads.average_rating} avg rated
        </span> — <span>{goodreads.ratings_count} ratings
        </span> — <span>{goodreads.text_reviews_count} reviews
        </span> — <span>{goodreads.books_count} editions</span>
        </>
        :null
      }
        <button onClick={closeRightPanel}>Back</button>
        <button>Edit Book</button>
      </div>
    </div>
  )
}
