import React, { useState } from 'react';
import './App.scss';
import Calculator from './Components/Calculator/Calculator';
import calculate from './Utils/calculate';

// eslint-disable-next-line react/prefer-stateless-function
const App = () => {
  const [params, setParams] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (ev) => {
    setParams((prevState) => calculate(prevState, ev.target.textContent));
  };

  const { total, next, operation } = params;
  const screenText = `${total ?? ''} ${operation ?? ''} ${next ?? ''}`;
  return (
    <div className="App">
      <Calculator screenText={screenText} calculate={(ev) => handleClick(ev)} />
    </div>
  );
};

export default App;
