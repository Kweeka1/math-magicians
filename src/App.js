import React from 'react';
import './App.scss';
import Calculator from './Components/Calculator/Calculator';
import calculate from './Utils/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(ev) {
    this.setState((prevState) => calculate(prevState, ev.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    const screenText = `${total ?? ''} ${operation ?? ''} ${next ?? ''}`;
    return (
      <div className="App">
        <Calculator screenText={screenText} calculate={(ev) => this.handleClick(ev)} />
      </div>
    );
  }
}

export default App;
