import React, { useState, useContext, useEffect } from 'react';
import { Input } from '../components/Input';
import { ListItems } from '../components/ListItems';
import { Book } from '../components/Book';
import { Reader } from '../components/Reader';
import { SideBar } from '../components/SideBar';
import { useLocalStorage } from '../components/useLocalStorage';
import { EditModeContext } from '../components/EditModeContext';
import { FaStar, FaHandPaper, FaTrash } from 'react-icons/fa';
import { useData } from '../components/BookClubContext';

/*export const BookClubPage = ( ) => { return (<p>temp</p>)};*/
/* how to set teleport?? */

export const BookClubPage = ( ) => {
  const [ currentReader, setCurrentReader ] = useLocalStorage ( 'current_reader', [] );
  const [ editMode, setEditMode ] = useState (false);
  const {
    teleport,
    readers,
    books,
    rates,
    addBook,
    removeBook,
    addReader,
    removeReader,
    callBookDetails,
    readingNow,
   } = useData();

    console.log(`teleports 0:${teleport[0]} 1:${teleport[1]}`);

  if (!currentReader.length) {
    console.log('currentReader is undefined');
    return (
      <div className="listBar">
        <h1>{(!readers.lenght) ? 'Are you in the list?' : 'Add readers' }</h1>
        <EditModeContext.Provider value={editMode}>
          <ListItems
            listOf={'readers'}
            items={readers}
            onRemoveItem={removeReader}
            onChooseItem={reader => {setCurrentReader([reader]); console.log('3rd level ' + reader)}}
          />
        </EditModeContext.Provider>
        <Input listOf={'readers'} onChooseItemData={data => addReader(data)}/>
        <button
          onClick={() => {console.log(`settint editMode to ${!editMode}`); setEditMode(!editMode)}}
          className="editListButton">
          Edit list
        </button>
      </div>
    )
  };


  return (
    <>
        <div className="noneBar"></div>
        <div className="listBar">
          {readingNow()
            ?
          <>
          <div className="listHead readingnow">
            <h2>Reading now</h2>
            <button onClick={''} className="editListButton">B</button>
          </div>
          <Book
            item={readingNow()}
            onChoose={() => callBookDetails(readingNow().id)} />
          </>
            : null
          }
          <div className="listHead">
            <h2>List of suggested books</h2>
            <button onClick={() => {console.log(`settint editMode to ${!editMode}`); setEditMode(!editMode)}} className="editListButton">Edit list</button>
          </div>
          <EditModeContext.Provider value={editMode}>
            <ListItems
              listOf={'books'}
              items={(!readingNow()) ? books : books.filter(book => !book.club.reading)}
              onRemoveItem={removeBook}
              onChooseItem={() => console.log('book')}
            />
          </EditModeContext.Provider>
          <Input listOf={'books'} onChooseItemData={data => addBook(data)}/>
        </div>
        <SideBar />
    </>
  )
};



/*
<div>
  <span>published {book.original_publication_year}
  </span> — <span>{book.average_rating} avg rated
  </span> — <span>{book.ratings_count} ratings
  </span> — <span>{book.text_reviews_count} reviews
  </span> — <span>{book.books_count} editions</span>
</div>
*/



/*
<div className="bookCard" onClick={() => chooseOne(book)} style={{maxWidth: '450px'}}>
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
*/

/*
BookClubPage
  Login
    ListOfReaders
      Reader
      AddReader
        Approve
          Reader
  MainScreen
    ListOfBooks
      Book
      AddBook
        Approve
          Book
            BookFooter
              Vote
              Reading
              NotesRate
    ListOfReaders
      Reader
      AddReader
        Approve
          Reader

*/


/*      id: bookBest.id,
      title: bookBest.title,
      author: bookBest.author.name,
      authorID: bookBest.author.id,
      image_url: bookBest.image_url,
      small_image_url: bookBest.small_image_url,
      original_publication_year: bookRoot.original_publication_year,
      books_count: bookRoot.books_count,
      goodreads:{
        average_rating: bookRoot.average_rating,
        ratings_count: bookRoot.ratings_count,
        text_reviews_count: bookRoot.text_reviews_count,
      },
*/
