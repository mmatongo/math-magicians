import React from 'react';
import CalcButton from './CalcButton';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcObj: {},
    };
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  handleCalculate(calcObj) {
    this.setState({ calcObj: calculate(calcObj) });
  }

  render() {
    const { calcObj } = this.state;

    let screen = '0';
    if (Object.keys(calcObj).length === 0 || (calcObj.total && calcObj.next && calcObj.operator === null)) {
      screen = '0';
    } else {
      screen = calcObj.next != null ? calcObj.next : calcObj.total;
    }

    return (
      <div className="calc-body">
        <div className="calc-screen">
          {screen}
        </div>
        <div className="keyboard">
          <div className="key-digits">
            <CalcButton text="AC" />
            <CalcButton text="+/-" />
            <CalcButton text="%" />
            <CalcButton text="7" />
            <CalcButton text="8" />
            <CalcButton text="9" />
            <CalcButton text="4" />
            <CalcButton text="5" />
            <CalcButton text="6" />
            <CalcButton text="1" />
            <CalcButton text="2" />
            <CalcButton text="3" />
            <CalcButton text="0" />
            <div className="key-dot">
              <CalcButton text="." />
            </div>
          </div>
          <div className="operators">
            <CalcButton text="÷" />
            <CalcButton text="x" />
            <CalcButton text="-" />
            <CalcButton text="+" />
            <CalcButton text="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
