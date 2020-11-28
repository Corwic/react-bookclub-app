import React, { useState } from 'react';
import { Header } from '../components/Header';
import { useData } from '../components/BookClubContext';
import { EditModeContext } from '../components/EditModeContext';
import { ListItems } from '../components/ListItems';
import { SideBar } from '../components/SideBar';

export const ReadBooksPage = () => {
  const [ editMode, setEditMode ] = useState (false);
  const {
    readers,
    books,
    removeBook,
    removeReader,
    callBookDetails,
    readingNow,
  } = useData();

  return (
    <>
      <div className="bookclub">
        <Header />
        <div className="noneBar"></div>
        <div className="listBar">
          <div className="listHead">
            <p>List of read books</p>
            <button onClick={() => {console.log(`settint editMode to ${!editMode}`); setEditMode(!editMode)}} className="editListButton">Edit list</button>
          </div>
          <EditModeContext.Provider value={editMode}>
            <ListItems
              listOf={'books'}
              items={(!readingNow()) ? books : books.filter(book => book.club.notes)}
              onRemoveItem={removeBook}
              onChooseItem={() => console.log('book')}
            />
          </EditModeContext.Provider>
        </div>
        <SideBar />
      </div>
    </>
  );
}
