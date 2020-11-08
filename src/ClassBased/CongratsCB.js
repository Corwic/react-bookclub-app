import React from 'react';

export class CounterCB extends React.Component {
  render() {
    const { threshold, onHide } = this.props;
    return (
      <>
          <h1>Congrats! You've reached {threshold} number of clicks</h1>
          <button onClick={onHide}>Hide</button>
      </>
    );
  }
}
