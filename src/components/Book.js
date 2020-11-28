import React, { useState, useContext } from 'react';
import { useData } from '../components/BookClubContext';
import { EditModeContext } from '../components/EditModeContext';
import { FaStar, FaHandPaper, FaTrash } from 'react-icons/fa';

export const Book = ({ id, item, onRemove = f => f, onChoose = f => f }) => {
  // const class = 'listItem__close ' + editModeToggl;
  const editMode = useContext(EditModeContext);
  const { title, author, image_url, goodreads, club } = item;
  const {
    vote,
    readIt,
    countReadingBooks,
    removeBook,
    callBookDetails,
    makeNote } = useData();
  console.log('Show book component');
  console.log(item);
  console.log('----');
  return (
    <div className={`listItem ${club.reading ? 'reading' : null }`}>
      <div className="book" >
        <header onClick={() => {console.log(item); callBookDetails(item.id)}}>
          <h3>{title}</h3>
          <p>by {author.name}</p>
          {club.votes != 0
            ? <p>Votes: {club.votes} <FaHandPaper color={'black'}/></p>
            : null
          }
        </header>
        <img onClick={() => {console.log(item); callBookDetails(item.id)}}
          alt="Book cover"
          src={image_url}/ >
        {(editMode===true) ?
        <div
          className={`removeItem ${(editMode===true) ? null : 'hidden'}`}
          onClick={() => {removeBook(item.id); console.log(id);}}>
          <FaTrash color={'white'} />
        </div>
          : club.votes == 0 ?
        <div
          onClick={() => vote(item.id)}
          className={''}
          style={{backgroundColor: 'gold'}}>
          Vote for it
        </div>
          : countReadingBooks() == 0 ?
        <div
          onClick={() => readIt(item.id)}
          className={''}
          style={{color: 'firebrick'}}>
          Read it
        </div>
          : club.reading ?
        <div
          onClick={() => makeNote(item.id)}
          className={''}
          style={{color: 'firebrick'}}>
          Make notes
        </div>
          : (club.notes) ?
        <div
          className={''}
          style={''}>
          Done
        </div>
          : null
        }
      </div>

    </div>
  )
};
