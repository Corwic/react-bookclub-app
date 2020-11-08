import React, { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../components/useLocalStorage';

export const BookClubContext = createContext();
export const useData = () => useContext(BookClubContext);

export const DataProvider = ({ children }) => {
  const [ readers, setReaders ] = useLocalStorage ( 'readers', [] );
  const [ books, setBooks ] = useLocalStorage ( 'books', [] );
  const [ rates, setRates ] = useLocalStorage ( 'rates', [] );
  const [ teleport, setTeleport ] = useState('');

  const bookByID = (key) => books.findIndex((obj => obj.id === key));

  const addBook = ({ bookRoot, best_book: bookBest }) => {
    console.log('AddBook');
    const newBooks = [...books,
      { ...bookBest,
        goodreads: bookRoot,
        club: {
          initiator: '',
          votes: 0,
          reading: false,
          rating: 0,
          meeting_date: '',
          meeting_involved: [],
          meeting_notes: '',
          notes: ''
        }
      }
    ];
    setBooks(newBooks);
  };

  const removeBook = ({ key }) => {
    console.log('key is ' + key)
    const newBooks = books.slice();
    newBooks.splice(bookByID(key), 1);
    setBooks(newBooks);
  };

  const addReader = ( name ) => {
    console.log('AddReader');
    console.log(name);
    const newReaders = [ ...readers,
      {
        name: name,
        goodreads: [],
        club: {
          favourite_book: ''
        }
      }
    ];
    setBooks(newReaders);
  };

  const removeReader = ({ key }) => {
    const newReaders = readers.slice();
    newReaders.splice(key, 1);
    setReaders(newReaders)
  };

  const vote = (bookID, voteData) => {
    if (!voteData) {
      setTeleport(['vote', bookID]);
    } else {
      let count = 0;
      voteData.map(v => count = count + v.rate)
      const newBooks = books.slice();
      newBooks[bookByID(bookID)].club.votes = count;
      setBooks(newBooks);
      setRates(voteData);
      setTeleport(['']);
      //for another place
      //voteData.map(v => {if (v.book == bookID) count = count + v.rate;});
    }
  };

  const countReadingBooks = () => {
    let count = 0;
    books.map(book => {if (book.club.reading) count++});
    console.log(count);
    return count;
  };

  const readIt = (bookID) => {
    if (countReadingBooks() > 0) return;
    alert(bookID);
    const newBooks = books.slice();
    newBooks[bookByID(bookID)].club.reading = !newBooks[bookByID(bookID)].club.reading;
    setBooks(newBooks);
  };


  return (
    <BookClubContext.Provider value={{
      teleport,
      readers,
      books,
      rates,
      addBook,
      removeBook,
      addReader,
      removeReader,
      vote,
      readIt,
      countReadingBooks,
    }}>
      {children}
    </BookClubContext.Provider>
  );
};








/*
const addColor = (title, color) =>
  setColors([
    ...colors,
    {
      id: v4(),
      rating: 0,
      title,
      color
    }
  ]);

const rateColor = (id, rating) =>
  setColors(
    colors.map(color => (color.id === id ? { ...color, rating } : color))
  );

const removeColor = id => setColors(colors.filter(color => color.id !== id));
*/
