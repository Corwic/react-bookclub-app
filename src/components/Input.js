import React, { useState, useEffect } from 'react';
import bookGR from '../data/bookGR.xml';
import { FaSearch } from 'react-icons/fa';

export const Input = ({ onChooseItemData = f => f, listOf }) => {
  const [ search, setSearch ] = useState ('');
  const [ grSearchResult, setGRRequest, grReset, loading ] = useGRSearch ('');


  if ( grSearchResult ) {
    if ( listOf==='books') return (
      <InputChooseBook books={grSearchResult}
        onChooseItem={data => {onChooseItemData(data); grReset()}}

      />
    );
    if ( listOf==='readers') return (
      <InputApproveReader readers={grSearchResult}
        onChooseItem={onChooseItemData}/>
    );
  };

  if ( loading ) return (<div className={'listItem'}>Loading</div>);

  if ( !grSearchResult ) {
  console.log('Input: no grSearchResult')
  return (
    <form
      className="listItem search"
      onSubmit={(e) => {
        e.preventDefault();
        setGRRequest(search);
        setSearch('');
      }}>
      <div>
        <FaSearch
          style={{paddingRight: '5px'}}
          color={'black'}/>
        <input
          type="text"
          placeholder={listOf==='books' ? 'Add a book' : 'Add a reader' /*or "+"*/}
          value={search}
          onChange={e => setSearch(e.target.value)} />
      </div>
      <button>Submit</button>
    </form>
  )
  };
};

export const useGRSearch = defaultValue => {
  const [searchValue, setSearchValue] = useState( defaultValue );
  const [searchResult, setSearchResult] = useState('');
  const [outputData, setOutputData] = useState('');
  const [loading, setLoading] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;
  // XML to JSON
  const parser = require('fast-xml-parser');
  const he = require('he');
  const options = {
    attributeNamePrefix : "@_",
    attrNodeName: "attr", //default is 'false'
    textNodeName : "#text",
    ignoreAttributes : true,
    ignoreNameSpace : false,
    allowBooleanAttributes : false,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    parseTrueNumberOnly: false,
    arrayMode: false, //"strict"
    attrValueProcessor: (val, attrName) => he.decode(val, {isAttributeValue: true}),//default is a=>a
    tagValueProcessor : (val, tagName) => he.decode(val), //default is a=>a
    stopNodes: ["parse-me-as-string"]
  };

  useEffect(() => {
    console.log('searchResult is changed');
    if (searchResult === '')
      {setOutputData(''); return};
    const selectedBooks = searchResult.GoodreadsResponse.search.results.work.slice();
    //GoodreadsResponse.search.results.work
    console.log('work:');
    console.log(selectedBooks);
    setOutputData(selectedBooks);
  }, [searchResult]);


  useEffect(() => {
    if (searchValue === '') return;
    console.log(`searching for ${searchValue}`);
//    console.log(bookGR.text());
    setLoading(true)
    fetch(
        `https://cors-anywhere.herokuapp.com/` +
        `https://www.goodreads.com/search.xml?key=${apiKey}&q=${searchValue}`)
      .then(response => response.text())
      .then(xmlData => parser.parse(xmlData, options))
      .then(setSearchResult)
      .then(console.log(typeof searchResult + '. and data = ' + searchResult))
      .then(setLoading(false))
      .catch(console.error);
//      setSearchResult(parser.parse(bookGR, options))
  }, [searchValue]);

  return [
    outputData,
    search => setSearchValue(search),
    () => setSearchResult(''),
    loading
  ];
};


export const ShowBookCard = ({ book, onChoose = f => f }) => {
  const bookBest = book.best_book;


  /*chooseOne = onChoose */
  return (
    <>
    <div className="bookCard" onClick={() => onChoose(book)} style={{maxWidth: '450px'}}>
      <header>
        <h2>{bookBest.title}</h2>
        <p>by {bookBest.author.name}</p>
        <p>published {book.original_publication_year}</p>
      </header>
      <img
          alt="Book cover"
          src={bookBest.image_url}/ >
      <div>
        <span>{book.average_rating} avg rated
        </span> of <span>{book.ratings_count} ratings</span>
      </div>
    </div>
    </>
  )
}


export const InputChooseBook = ({ books, onChooseItem = f=>f }) => {
  const [ numberOfBooks, setNumberOfBooks ] = useState(1)

  console.log(`InputChooseBook ${books}`)
  return (
    <div className="booksList toSelect" style={{maxWidth: '450px'}}>
      {(books !== '')
        ? books.slice(0, numberOfBooks).map(book =>
          <ShowBookCard
            key={book.id}
            book={book}
            onChoose={onChooseItem}
          />)
        : null
      }
      <button onClick={() => setNumberOfBooks(numberOfBooks + 1)}>+</button>
    </div>
  );
};

export const InputChooseReader = () => {
  return ('InputChooseReader')
};

export const InputApproveReader = () => {
  return ('InputApproveReader')
};
