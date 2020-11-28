import React, { useState } from 'react';
import { useData } from '../components/BookClubContext';

export const MakeBookNotes = ({  }) => {
  const { teleport, rates, closeRightPanel } = useData();
  const [ noteText, setNoteText ] = useState ('');

  return (
    <div className="book-note">
      <div className="listHead">
        <h2>Readers</h2>
        <button onClick={closeRightPanel}>Back</button>
      </div>
      <form
        onSubmit={()=>alert('ready')}>
        <textarea
          rows="20" cols="50"
          placeholder={'Add a note'}
          value={noteText}
          onChange={e => setNoteText(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  )
}
