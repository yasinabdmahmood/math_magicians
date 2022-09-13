import React from 'react';
import Item from './Item';
import calculate from '../logic/calculate';
// import operate from '../logic/operate';
// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleObjectChange = this.handleObjectChange.bind(this);
    this.state = {
      obj: {
        total: null,
        next: null,
        operation: null,
      },
      display: '',
    };
  }

  handleObjectChange(btn) {
    const { obj } = this.state;
    const newObj = calculate(obj, btn);
    this.setState(() => ({
      obj: newObj,
    }));
    if (btn === '=') {
      this.setState(() => ({
        display: newObj.total,
      }));
    } else if (btn === 'AC') {
      this.setState(() => ({
        display: '',
      }));
    } else {
      this.setState((state) => ({
        display: state.display + btn,
      }));
    }
  }

  render() {
    const { display } = this.state;
    return (
      <div className="calculator">
        <div className="dark-gray">{display}</div>
        <Item label="AC" cl="light-gray" handleObjectChange={this.handleObjectChange} />
        <Item label="+/-" cl="light-gray" handleObjectChange={this.handleObjectChange} />
        <Item label="%" cl="light-gray" handleObjectChange={this.handleObjectChange} />
        <Item label="÷" cl="orange" handleObjectChange={this.handleObjectChange} />
        <Item label="7" cl="light-gray" handleObjectChange={this.handleObjectChange} />
        <Item label="8" cl="light-gray" handleObjectChange={this.handleObjectChange} />
        <Item label="9" cl="light-gray" handleObjectChange={this.handleObjectChange} />
        <Item label="x" cl="orange" handleObjectChange={this.handleObjectChange} />
        <Item label="4" cl="light-gray" handleObjectChange={this.handleObjectChange} />
        <Item label="5" cl="light-gray" handleObjectChange={this.handleObjectChange} />
        <Item label="6" cl="light-gray" handleObjectChange={this.handleObjectChange} />
        <Item label="-" cl="orange" handleObjectChange={this.handleObjectChange} />
        <Item label="1" cl="light-gray" handleObjectChange={this.handleObjectChange} />
        <Item label="2" cl="light-gray" handleObjectChange={this.handleObjectChange} />
        <Item label="3" cl="light-gray" handleObjectChange={this.handleObjectChange} />
        <Item label="+" cl="orange" handleObjectChange={this.handleObjectChange} />
        <Item label="0" cl="double light-gray" handleObjectChange={this.handleObjectChange} />
        <Item label="." cl="light-gray" handleObjectChange={this.handleObjectChange} />
        <Item label="=" cl="orange" handleObjectChange={this.handleObjectChange} />

      </div>
    );
  }
}

export default Calculator;
