import React, { useState, useEffect } from 'react';

export const GRSearchPage = () => {
  const [books, setBooks] = useState ({ title: ' ' });

  const apiKey = process.env.REACT_APP_API_KEY; // REACT_APP_API_KEY=DQ4OR5OKacE3IhLmDBA npm start
  const searchText = 'Dune';


  useEffect(() => {
    // parse string xml received from goodreads api

    const parseXMLResponse = response => {
      const parser = new DOMParser();
      const XMLResponse = parser.parseFromString(response, "application/xml");
      const parseError = XMLResponse.getElementsByTagName("parsererror");

      if (parseError.length) {
        alert('go');

        /*setBooks({
          error: "There was an error fetching results.",
          fetchingData: false
        });*/
      } else {
        const XMLresults = new Array(...XMLResponse.getElementsByTagName("work"));
        const searchResults = XMLresults.map(result => this.XMLToJson(result));
        this.setState({ fetchingData: false }, () => {
          setBooks(searchResults);
        });
      }
    };

    // Function to convert simple XML document into JSON.
    // Loops through each child and saves it as key, value pair
    // if there are sub-children, call the same function recursively on its children.
    const XMLToJson = XML => {
      const allNodes = new Array(...XML.children);
      const jsonResult = {};
      allNodes.forEach(node => {
        if (node.children.length) {
          jsonResult[node.nodeName] = this.XMLToJson(node);
        } else {
          jsonResult[node.nodeName] = node.innerHTML;
        }
      });
      return jsonResult;
    };

    const fetchBooks = async () => {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchText}`, {
        /*mode: 'no-cors',*/
        headers: {'Content-Type': 'application/xml'},
        /*cache: 'no-cache',
        'Access-Control-Allow-Origin': 'http://zhuzhalka.org'*/
      });
      const data = await parseXMLResponse(response);

      console.log(data);
      setBooks(data);
    }

    fetchBooks();
  }, []);

  return (
    <>
    <h1>GoodReads</h1>
    <div>

    </div>
    </>
  )
};

    /*
    DQ4OR5OKacE3IhLmDBA
    `https://www.goodreads.com/search/index.xml?key=${apiKey}&q=${searchText}`
    `https://www.goodreads.com/book/show/${bookId}?key=${apiKey}`
    `https://www.goodreads.com/book/show/${bookData.best_book.id}`

    curl "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search.xml?key=YOUR_KEY&q=Dune"


    <h3>Title: {books.best_book.title}</h3>
    <p>Author: {books.best_book.author.name}</p>


    // parse string xml received from goodreads api
    const parseXMLResponse = response => {

      const parser = new DOMParser();
      const XMLResponse = parser.parseFromString(response, "application/xml");
      const parseError = XMLResponse.getElementsByTagName("parsererror");

      if (parseError.length) {
        this.setState({
          error: "There was an error fetching results.",
          fetchingData: false
        });
      } else {
        const XMLresults = new Array(...XMLResponse.getElementsByTagName("work"));
        const searchResults = XMLresults.map(result => this.XMLToJson(result));
        this.setState({ fetchingData: false }, () => {
          this.props.setResults(searchResults);
        });
      }
    };

    // Function to convert simple XML document into JSON.
    // Loops through each child and saves it as key, value pair
    // if there are sub-children, call the same function recursively on its children.
    const XMLToJson = XML => {
      const allNodes = new Array(...XML.children);
      const jsonResult = {};
      allNodes.forEach(node => {
        if (node.children.length) {
          jsonResult[node.nodeName] = this.XMLToJson(node);
        } else {
          jsonResult[node.nodeName] = node.innerHTML;
        }
      });
      return jsonResult;
    };
    */
