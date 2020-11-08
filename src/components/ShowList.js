import React, { useState, useEffect } from 'react';
import { Input } from './Input';
import { ShowListItems } from './ShowListItems';
import { useLocalStorage } from './useLocalStorage';
import { EditModeContext } from './EditModeContext';

export const ShowList = ({ listOf }) => {
  const [ items, setItems ] = useLocalStorage ( listOf, [] );
  const [ editMode, setEditMode ] = useState (false);

  const addItem = (itemData) => {
    console.log('AddItem');
    console.log(itemData);
    const obj = {
      name: itemData.best_book.title
    };
    const newItems = items.concat([obj]);
    setItems(newItems);
  };

  return (
    <>
      <div className="listBar">
      <h1>{(listOf == 'books') ? 'List of Books' : 'List of Readers' }</h1>
        <EditModeContext.Provider value={editMode}>
          <ShowListItems
            items={items}
            onRemoveItem={id => {
              const newItems = items.slice();
              newItems.splice(id, 1);
              setItems(newItems)
            }}
          />
        </EditModeContext.Provider>
        <Input listOf={listOf} on={dataItem => addItem(dataItem)}/>
        <button onClick={() => {console.log(`settint editMode to ${!editMode}`); setEditMode(!editMode)}} className="editListButton">Edit list</button>
      </div>
    </>
  )
};


// JSON.stringify(obj) JSON.parse(obj)
// array.toString()   .join()  .split(',')



/*  let id = '0';
  console.log('id type is ' + typeof id + '. id = ' + id)
  let id2 = Array(id);
  console.log('id2 type is ' + typeof id2 + '. id2 = ' + id2)
  id2.push(3);
  console.log('id2 type is ' + typeof id2 + '. id2 = ' + id2)
  console.log('id2[0] type is ' + typeof id2[0] + '. id2[0] = ' + id2[0])
*/

/*  const books = [{id: '123', title: 'Dune'},{id: '223', title: 'Low'}];
  const books2str = b => b
    .map(book => JSON.stringify(book))
    .join(String.fromCharCode(7));

  const books2obj = b => b
    .split(String.fromCharCode(7))
    .map(book => JSON.parse(book));
*/
