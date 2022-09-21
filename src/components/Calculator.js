import React, { useState } from 'react';
import Item from './Item';
import calculate from '../logic/calculate';

function Calculator() {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [display, setDisplay] = useState('');

  const handleObjectChange = (btn) => {
    const newObj = calculate(obj, btn);
    setObj(newObj);

    if (btn === '=') {
      setDisplay(newObj.total);
    } else if (btn === 'AC') {
      setDisplay('');
    } else {
      setDisplay(display + btn);
    }
  };

  return (
    <div className="calculator-container" data-testid="calculator-page">
      <h2>Lets do some math</h2>
      <div className="calculator">
        <div className="dark-gray" data-testid="display">{display}</div>
        <Item label="AC" cl="light-gray" handleObjectChange={handleObjectChange} />
        <Item label="+/-" cl="light-gray" handleObjectChange={handleObjectChange} />
        <Item label="%" cl="light-gray" handleObjectChange={handleObjectChange} />
        <Item label="÷" cl="orange" handleObjectChange={handleObjectChange} />
        <Item label="7" cl="light-gray" handleObjectChange={handleObjectChange} />
        <Item label="8" cl="light-gray" handleObjectChange={handleObjectChange} />
        <Item label="9" cl="light-gray" handleObjectChange={handleObjectChange} />
        <Item label="x" cl="orange" handleObjectChange={handleObjectChange} />
        <Item label="4" cl="light-gray" handleObjectChange={handleObjectChange} />
        <Item label="5" cl="light-gray" handleObjectChange={handleObjectChange} />
        <Item label="6" cl="light-gray" handleObjectChange={handleObjectChange} />
        <Item label="-" cl="orange" handleObjectChange={handleObjectChange} />
        <Item label="1" cl="light-gray" handleObjectChange={handleObjectChange} />
        <Item label="2" cl="light-gray" handleObjectChange={handleObjectChange} />
        <Item label="3" cl="light-gray" handleObjectChange={handleObjectChange} />
        <Item label="+" cl="orange" handleObjectChange={handleObjectChange} />
        <Item label="0" cl="double light-gray" handleObjectChange={handleObjectChange} />
        <Item label="." cl="light-gray" handleObjectChange={handleObjectChange} />
        <Item label="=" cl="orange" handleObjectChange={handleObjectChange} />

      </div>
    </div>
  );
}

export default Calculator;
