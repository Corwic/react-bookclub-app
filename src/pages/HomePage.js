import React from 'react';
import { ShowList } from '../components/ShowList';

export const HomePage = ( ) => {

  let myArray = [
    {
      book: '01',
      reader: '',
      rate: 0,
    },
    {
      book: '02',
      reader: '',
      rate: 0,
    },
    {
      book: '03',
      reader: '',
      rate: 1,
    },
    {
      book: '03',
      reader: '',
      rate: 3,
    }
  ];
  //Find index of specific object using findIndex method.
  const ccc = '03';
  const bookByID = (key) => myArray.findIndex((obj => obj.book == key));
  let mapo = 0;
  myArray.map(lo => {if (lo.book == ccc) mapo = mapo + lo.rate;});
  console.log("map: ", mapo);
  //Log object to Console.
  console.log("obj: ", bookByID(ccc));
  console.log("Before update: ", myArray[bookByID(ccc)]);
  //Update object's name property.
  myArray[bookByID(ccc)].reader = "Laila";
  //Log object to console again.
  console.log("After update: ", myArray[bookByID(ccc)]);
  console.log(myArray);
  console.log(myArray[1].reader);

  const i = f => f;
  const club = {
    initiator: '',
    avg_votes: 0,
    reading: false,
    avg_rating: 0,
    meeting_date: '',
    meeting_involved: [],
    meeting_notes: '',
    review: 'Great'
  }
  const obj = {
    ...club,
    book: 'Dune',
    bookData: {
      id: '1212',
      show: 'Frank'
    }
  };
  const { bookData: show } = obj;
  const name = 'Hoho';

  const hey = e => {
    return e + 1;
  }


  return (
    <>
    <p><Hoho /></p>
      <h1>Book Club</h1>
      <div className="allLists">
        <ShowList listOf={'books'} />
        <ShowList listOf={'readers'} />
      </div>
      <p>{hey(1)}</p>
    </>
  )
};

export const Hoho = () => {
  return ('Hoho done');
}
