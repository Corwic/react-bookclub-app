import React, { useState, useContext } from 'react';
import { useData } from '../components/BookClubContext';
import { EditModeContext } from '../components/EditModeContext';
import { FaStar, FaHandPaper, FaTrash } from 'react-icons/fa';

export const Reader = ({ id, item, onRemove = f => f, onChoose = f => f }) => {
  // const class = 'listItem__close ' + editModeToggl;
  const editMode = useContext(EditModeContext);
  const { teleport } = useData();

  return (
    <div
      className="listItem reader"
      onClick={() => {if (!teleport) {onChoose(item.name); console.log('1st level ' + item.name)}}}>
      {item.name}
      <button
        className={(editMode===true) ? null : 'hidden'}
        onClick={() => onRemove(id)}>
        <FaTrash color={'white'} />
      </button>
    </div>
  )
};
