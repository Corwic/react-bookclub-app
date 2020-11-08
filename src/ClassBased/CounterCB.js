import React from 'react';

export class CounterCB extends React.Component {
  render () {
    const { numberOfClicks, onIncrement } = this.props;
    return () {
      <>
      <p> You've clicked the button {numberOfClicks} times</p>
      <button onClick={this.props.onIncrement}>Click Me!</button>
      </>};
    }
  }
}
