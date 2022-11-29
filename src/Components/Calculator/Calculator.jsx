import './Calculator.scss';
import React from 'react';

const padItems = [
  { sym: '/', class: 'operation' }, { sym: '7', class: 'seven' },
  { sym: '8', class: 'eight' }, { sym: '9', class: 'nine' },
  { sym: 'x', class: 'operation' }, { sym: '4', class: 'four' },
  { sym: '5', class: 'five' }, { sym: '6', class: 'six' },
  { sym: '-', class: 'operation' }, { sym: '1', class: 'one' },
  { sym: '2', class: 'two' }, { sym: '3', class: 'three' },
  { sym: '+', class: 'operation' }, { sym: '0', class: 'zero' },
];

const clear = { sym: 'AC', class: 'all_clear' };
const equal = { sym: '=', class: 'operation' };
const switchType = { sym: '+/-', class: 'plus_neg' };
const modular = { sym: '%', class: 'modular' };
const point = { sym: '.', class: 'point' };

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <>
        <div className="screen">0</div>
        <div className="pad">
          <div
            key={clear.sym}
            className={clear.class}
          >
            {clear.sym}
          </div>
          <div
            key={switchType.sym}
            className={switchType.class}
          >
            {switchType.sym}
          </div>
          <div
            key={modular.sym}
            className={modular.class}
          >
            {modular.sym}
          </div>
          {
            padItems.map((sym) => (
              <div
                key={sym.sym}
                className={sym.class}
              >
                {sym.sym}
              </div>
            ))
          }
          <div
            key={point.sym}
            className={point.class}
          >
            {point.sym}
          </div>
          <div
            key={equal.sym}
            className={equal.class}
          >
            {equal.sym}
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
