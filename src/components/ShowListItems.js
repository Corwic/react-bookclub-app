import React from 'react';
import { ShowItem } from '../components/ShowItem';


export const ShowListItems = ({ items = [], onRemoveItem = f => f }) => {

  if (!items.length) {
    return <div className="listItem">No items</div>;
  }

  return items.map( (item, i) => <ShowItem id={i} item={item} onRemove={onRemoveItem} key={i} />)

}
