import React from 'react';
import { CounterСВ } from './CounterCB';
import { CongratsCB } from './CongratsCB';
import { DisplayIf } from '../DisplayIf';

export class CounterPageCB extends React.Component {
  state = {
    hideMessage: false,
    numberOfClicks: 0,
  }

  /*componentDidUpdate() {};*/

  increment = () => {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1})
  };

  render() {
    const { hideMessage, numberOfClicks } = this.state;
    return (
      <>
      <h1> The Counter Button Page</h1>
      <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
        <CongratsСИ
          threshold={10}
          onHide={() => this.setState({ hideMessage:true }) />
      </DisplayIf>

      <CounterСИ onIncrement={increment} numberOfClicks={numberOfClicks} />
      </>
    )
  }
}
