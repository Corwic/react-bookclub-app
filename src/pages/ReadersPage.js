import React, { useState } from 'react';
import { useData } from '../components/BookClubContext';
import { Input } from '../components/Input';
import { EditModeContext } from '../components/EditModeContext';
import { ListItems } from '../components/ListItems';

export const ReadersPage = () => {
  const [ editMode, setEditMode ] = useState (false);
  const {
    readers,
    addReader,
    removeReader
  } = useData();

  return (
    <div className="listBar">
      <div className="listHead">
        <h2>Readers</h2>
        <button
          onClick={() => {console.log(`settint editMode to ${!editMode}`); setEditMode(!editMode)}}
          className="editListButton">
          Edit list
        </button>
      </div>
      <div className="bookclub">
        <div className="listBar">
          <EditModeContext.Provider value={editMode}>
            <ListItems
              listOf={'readers'}
              items={readers}
              onRemoveItem={removeReader}
              onChooseItem={() => alert(`soon we'll show the details about the reader`)}
            />
          </EditModeContext.Provider>
          <Input listOf={'readers'} onChooseItemData={data => addReader(data)}/>
        </div>
      </div>
    </div>
  )
};
