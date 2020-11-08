import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import { CounterButton } from '../CounterButton';
import { Congrats } from '../Congrats';
import { DisplayIf } from '../DisplayIf';



export const CounterButtonPage = () => {
  //const location = useLocation();
  //const startingValue = parse(location.search).startingValue || 0;
  const [numberOfClicks, setNumberOfClicks] = useState(
    Number(localStorage.getItem('numberOfClicks')) || 0
  ); //Number(startingValue)
  const [hideMessage, setHideMessage] = useState(false);

  useEffect(() => {
    localStorage.setItem('numberOfClicks', numberOfClicks)
  }, [numberOfClicks])

  const increment = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <>
    <h1> The Counter Button Page</h1>
    <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
      <Congrats
        threshold={10}
        onHide={() => setHideMessage(true)} />
    </DisplayIf>

    <CounterButton onIncrement={increment} numberOfClicks={numberOfClicks} />
    </>
  )

}
