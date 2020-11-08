import React, { useContext } from 'react';
import { EditModeContext } from './EditModeContext'

export const ShowItem = ({ id, item, onRemove = f => f,  }) => {
  // const class = 'listItem__close ' + editModeToggl;
  const editMode = useContext(EditModeContext);

  return (
    <div className="listItem">{item.name}
      <button className={(editMode===true) ? null : 'hidden'} onClick={() => onRemove(id)}>×</button>
    </div>
  )
}
