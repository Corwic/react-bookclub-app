import React from 'react'; //, { useEffect }

export const Congrats = ({ threshold, onHide }) => {

  return (
    <>
        <h1>Congrats! You've reached {threshold} number of clicks</h1>
        <button onClick={onHide}>Hide</button>
    </>
  );
}

/*export const Congrats = ({ numberOfClicks, threshold }) => {
  useEffect(() => {
    return () => console.log('Congrats unmounted')
  }, []);

  return numberOfClicks >= threshold
    ? <>
        <h1>Congrats! You've reached {threshold} number of messages</h1>
        <button onClick={onHide}>Hide</button>
    </>
    : null;
}*/
