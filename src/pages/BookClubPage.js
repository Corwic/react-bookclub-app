import React, { useState, useContext, useEffect } from 'react';
import { Input } from '../components/Input';
import { useLocalStorage } from '../components/useLocalStorage';
import { EditModeContext } from '../components/EditModeContext';
import { FaStar, FaHandPaper, FaTrash } from 'react-icons/fa';
import { useData } from '../components/BookClubContext';

/*export const BookClubPage = ( ) => { return (<p>temp</p>)};*/

export const BookClubPage = ( ) => {
  const [ currentReader, setCurrentReader ] = useLocalStorage ( 'current_reader', [] );
  const [ editMode, setEditMode ] = useState (false);
  const {
    teleport,
    readers,
    books,
    rates,
    addBook,
    removeBook,
    addReader,
    removeReader } = useData();

    console.log(`${teleport[0]} ${teleport[1]}`);

  if (!currentReader.length) {
    console.log('currentReader is undefined');
    return (
      <>
        <h1>Book Club</h1>
        <h2>Login</h2>
        <div className="login">
          <div className="readerList">
          <h1>{(!readers.lenght) ? 'Are you in the list?' : 'Add readers' }</h1>
            <EditModeContext.Provider value={editMode}>
              <ListItems
                listOf={'readers'}
                items={readers}
                onRemoveItem={removeReader}
                onChooseOne={name => setCurrentReader([name])}
              />
            </EditModeContext.Provider>
            <Input listOf={'readers'} onChooseItemData={data => addReader(data)}/>
            <button
              onClick={() => {console.log(`settint editMode to ${!editMode}`); setEditMode(!editMode)}}
              className="editListButton">
              Edit list
            </button>
          </div>
        </div>
      </>
    )
  };

  return (
    <>
      <h1>Book Club</h1>
      <p>Hi, {currentReader}!</p>
      <div className="bookclub">
        <div className="listBar">
          <EditModeContext.Provider value={editMode}>
            <ListItems
              listOf={'books'}
              items={books}
              onRemoveItem={removeBook}
              onChooseItem={() => alert('book')}
            />
          </EditModeContext.Provider>
          <Input listOf={'books'} onChooseItemData={data => addBook(data)}/>
          <button onClick={() => {console.log(`settint editMode to ${!editMode}`); setEditMode(!editMode)}} className="editListButton">Edit list</button>
        </div>
        {
          teleport[0] == 'vote'
            ?
        <div className="listBar">
          <VoteForBook />
        </div>
            : null
        }
      </div>
    </>
  )
};
/*-----------------------------------------------------------------------*/
export const VoteForBook = ({  }) => {
  const { books, readers, teleport, rates, vote } = useData();
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

  return (<>
            <h2>Voting for {teleport[1]}</h2>
          {readers.map( (reader, i) =>
            <>
              <Reader key={reader.name} id={i}
                item={reader}
              />
              <Vote key={reader.name+'Votes'} id={i}
                votes={votesSelected[i].rate}
                onVote={votes => {onVoteForBook(i, votes, reader.name)}}/>
            </>
        )}
            <button onClick={() => vote(teleport[1], votesSelected)}>Save votes</button>
          </>)
};
/*-------
<>
<button onClick={() => vote(teleport, 'data')}>Voted</button>
</>
----------------------------------------------------------------*/

const createArray = length => [...Array(length)];
const Hand = ({ selected = false, onSelect = f=>f }) => (
  <FaHandPaper
    style={{paddingRight: '5px'}}
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

/*-----------------------------------------------------------------------*/

export const Reader = ({ id, item, onRemove = f => f, onChoose = f => f }) => {
  // const class = 'listItem__close ' + editModeToggl;
  const editMode = useContext(EditModeContext);
  const { teleport } = useData();


  return (
    <div
      className="listItem reader"
      onClick={() => {if (!teleport) onChoose(item.name)}}>
      {item.name}
      <button
        className={(editMode===true) ? null : 'hidden'}
        onClick={() => onRemove(id)}>
        <FaTrash color={'white'} />
      </button>
    </div>
  )
};

/*-----------------------------------------------------------------------*/

export const Book = ({ id, item, onRemove = f => f, onChoose = f => f }) => {
  // const class = 'listItem__close ' + editModeToggl;
  const editMode = useContext(EditModeContext);
  const { title, author, image_url, goodreads, club } = item;
  const { vote, readIt, countReadingBooks, removeBook } = useData();
  console.log('item');
  console.log(item);
  console.log('----');
  return (
    <div className={`listItem ${club.reading ? 'reading' : null }`}>
      <div className="book">
        <header>
          <h2>{title}</h2>
          <p>by {author.name}</p>
          {club.votes != 0
            ? <p>Votes: {club.votes}</p>
            : null
          }
        </header>
        <img
          alt="Book cover"
          src={image_url}/ >
        {(editMode===true) ?
        <div
          className={`removeItem ${(editMode===true) ? null : 'hidden'}`}
          onClick={() => {removeBook(item.id); alert(id);}}>
          <FaTrash color={'white'} />
        </div>
          : club.votes == 0 ?
        <div
          onClick={() => vote(item.id)}
          className={''}
          style={{backgroundColor: 'gold'}}>
          Vote for it
        </div>
          : countReadingBooks() == 0 ?
        <div
          onClick={() => readIt(item.id)}
          className={''}
          style={{color: 'firebrick'}}>
          Read it
        </div>
          : club.reading ?
        <div
          onClick={() => readIt(item.id)}
          className={''}
          style={{color: 'firebrick'}}>
          Make notes
        </div>
          : (club.notes) ?
        <div
          onClick={() => readIt(item.id)}
          className={''}
          style={''}>
          Done
        </div>
          : null
        }
      </div>

    </div>
  )
};
//
/*-----------------------------------------------------------------------*/

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
            onChoose={onChooseItem} />
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


/*
<div>
  <span>published {book.original_publication_year}
  </span> — <span>{book.average_rating} avg rated
  </span> — <span>{book.ratings_count} ratings
  </span> — <span>{book.text_reviews_count} reviews
  </span> — <span>{book.books_count} editions</span>
</div>
*/



/*
<div className="bookCard" onClick={() => chooseOne(book)} style={{maxWidth: '450px'}}>
  <header>
    <h2>{bookBest.title}</h2>
    <p>by {bookBest.author.name}</p>
  </header>
  <img
      alt="Book cover"
      src={bookBest.image_url}/ >
  <div>
    <span>published {book.original_publication_year}
    </span> — <span>{book.average_rating} avg rated
    </span> — <span>{book.ratings_count} ratings
    </span> — <span>{book.text_reviews_count} reviews
    </span> — <span>{book.books_count} editions</span>
  </div>
</div>
*/

/*
BookClubPage
  Login
    ListOfReaders
      Reader
      AddReader
        Approve
          Reader
  MainScreen
    ListOfBooks
      Book
      AddBook
        Approve
          Book
            BookFooter
              Vote
              Reading
              NotesRate
    ListOfReaders
      Reader
      AddReader
        Approve
          Reader

*/


/*      id: bookBest.id,
      title: bookBest.title,
      author: bookBest.author.name,
      authorID: bookBest.author.id,
      image_url: bookBest.image_url,
      small_image_url: bookBest.small_image_url,
      original_publication_year: bookRoot.original_publication_year,
      books_count: bookRoot.books_count,
      goodreads:{
        average_rating: bookRoot.average_rating,
        ratings_count: bookRoot.ratings_count,
        text_reviews_count: bookRoot.text_reviews_count,
      },
*/
