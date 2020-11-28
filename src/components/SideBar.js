import React, { useState, useContext, useEffect } from 'react';
import { VoteForBook } from '../components/VoteForBook';
import { BookDetails } from '../components/BookDetails';
import { MakeBookNotes } from '../components/MakeBookNotes';
import { useData } from '../components/BookClubContext';

export const SideBar = () => {
  const { teleport } = useData();

  return (
    <div className={`sideBar ${(teleport[0]) ? 'show' : null}`}>
      {(teleport[0] === 'vote')
        ?
      <div className="listBar">
        <VoteForBook />
      </div>
        : teleport[0] === 'book details'
        ?
      <div className="listBar">
        <BookDetails />
      </div>
        : teleport[0] === 'book note'
        ?
      <div className="listBar">
        <MakeBookNotes />
      </div>
        : null
      }
    </div>

  )
}
