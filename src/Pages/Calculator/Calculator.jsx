/* eslint-disable react/prop-types, react/prefer-stateless-function */
import './Calculator.scss';
import React from 'react';

const padItems = [
  { sym: 'AC', class: 'all_clear' },
  { sym: '+/-', class: 'plus_neg' }, { sym: '%', class: 'modular' },
  { sym: '/', class: 'operation' }, { sym: '7', class: 'seven' },
  { sym: '8', class: 'eight' }, { sym: '9', class: 'nine' },
  { sym: 'x', class: 'operation' }, { sym: '4', class: 'four' },
  { sym: '5', class: 'five' }, { sym: '6', class: 'six' },
  { sym: '-', class: 'operation' }, { sym: '1', class: 'one' },
  { sym: '2', class: 'two' }, { sym: '3', class: 'three' },
  { sym: '+', class: 'operation' }, { sym: '0', class: 'zero' },
  { sym: '.', class: 'point' }, { sym: '=', class: 'operation' },
];

const Calculator = ({ screenText, calculate }) => (
  <div className="calculator">
    <h1 className="calculator-title">Lets do some math</h1>
    <div className="screen">{screenText}</div>
    <div className="pad">
      {
        padItems.map((item) => (
          <div
            role="presentation"
            key={item.sym}
            onClick={() => calculate(item.sym)}
            className={item.class}
          >
            {item.sym}
          </div>
        ))
      }
    </div>
  </div>
);

export default Calculator;
