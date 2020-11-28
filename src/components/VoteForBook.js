import React, { useState, useEffect }  from 'react';
import { FaStar, FaHandPaper, FaTrash } from 'react-icons/fa';
import { useData } from '../components/BookClubContext';

const createArray = length => [...Array(length)];
const Hand = ({ selected = false, onSelect = f=>f }) => (
  <FaHandPaper
    style={''}
    color={selected ? 'firebrick' : 'grey'}
    onClick={onSelect} />
);

export const Vote = ({ votes, onVote = f=>f, totalVotes = 3 }) => {

  return (
    <div className='itemVote'>
      {createArray(totalVotes).map((n,i) => (
        <Hand key={i} selected={votes > i} onSelect={() => {onVote(i + 1, '')}}/>
      ))}
    </div>
  )
};

export const VoteForBook = ({  }) => {
  const { books, readers, teleport, rates, vote, bookByID, closeRightPanel } = useData();
  // teleport is the variable to hold the bookID, that user will vote for
  // teleport structure is [buttonpressed, bookID]
  const v = Array(readers.length).fill({
    book: teleport[1],
    reader: '',
    rate: 0,
  });
  const vData = rates.filter(v => v.book == teleport[1]);
  const [ votesSelected, setVotesSelected ] = useState(vData.length == 0 ? v : vData);

  useEffect(()=>{
    setVotesSelected(vData.length == 0 ? v : vData);
  }, [teleport[1]]);

  const onVoteForBook = ( id, votes, name ) => {
    const newVote = votesSelected.slice();
    newVote.splice(id, 1, {
      book: teleport[1],
      reader: name,
      rate: votes,
    });
    setVotesSelected(newVote);
  };

  if (!readers.length) {
    return <div className="listItem">No items</div>;
  }

  return (
    <>
      <div className="listHead">
        <h2>Voting for {books[bookByID(teleport[1])].title}</h2>
        <button onClick={closeRightPanel}>Back</button>
      </div>
        {readers.map( (reader, i) =>
          <div className="voteItem">
            {reader.name}
            <Vote key={reader.name+'Votes'} id={i}
              votes={votesSelected[i].rate}
              onVote={votes => {onVoteForBook(i, votes, reader.name)}}/>
          </div>
        )}
      <button onClick={() => vote(teleport[1], votesSelected)}>Save votes</button>
    </>
  )
};
