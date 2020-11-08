import { useState, useEffect } from 'react';

export const GRSearch = ({ searchValue, numberOfBooks }) => {
  const [searchResult, setSearchResult] = useState( null );

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
    const fetchBooks = async () => {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/` +
        `https://www.goodreads.com/search.xml?key=${apiKey}&q=${searchValue}`);
      const xmlData = await response.text();
      const booksData = parser.parse(xmlData, options);

      const selectedBooks = booksData.GoodreadsResponse.search.results.work.slice(0, numberOfBooks);
      //GoodreadsResponse.search.results.work
      console.log('work:');
      console.log(selectedBooks);
      setSearchResult(selectedBooks);
    }

    fetchBooks();
  }, []);



  return searchResult;
}
