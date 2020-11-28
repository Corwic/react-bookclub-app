import React, { useState } from 'react';
import { useData } from '../components/BookClubContext';
import { Book } from '../components/Book';
import { Reader } from '../components/Reader';

export const ListItems = ({ items = [], listOf , onRemoveItem = f => f, onChooseItem = f => f }) => {
  const { teleport, vote } = useData();

  if (!items.length) {
    return <div className="listItem">No items</div>;
  }

  if (listOf === 'readers')
    return (
      <>
        {
          items.map( (item, i) =>
          <Reader
            key={i} id={i}
            item={item}
            onRemove={onRemoveItem}
            onChoose={data => {onChooseItem(data); console.log('2nd level ' + data)}} />
          )
        }
      </>
    );
  if (listOf === 'books')
    return items.map( (item, i) =>
          <Book
            key={i} id={i}
            item={item}
            onRemove={onRemoveItem}
            onChoose={onChooseItem} />
    );
};
