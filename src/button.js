import React from "react";
import "./Button.css";
import Result from "./Result";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.numberList = [
      { id: "zero" },
      { id: "one" },
      { id: "two" },
      { id: "three" },
      { id: "four" },
      { id: "five" },
      { id: "six" },
      { id: "seven" },
      { id: "eight" },
      { id: "nine" },
    ];
    this.calculationList = [
      { id: "plus", value: "+" },
      { id: "minus", value: "-" },
      { id: "muliplication", value: "*" },
      { id: "division", value: "/" },
      { id: "equality", value: "=" },
    ];
  }

  render() {
    const setValue = this.props.setValue;
    const setSign = this.props.setSign;
    const setResult = this.props.setResult;

    let i = 0;
    let signList = [];
    let calculationList = this.calculationList;

    let n = 0;
    let figureList = [];
    let numberList = this.numberList;

    const onClickFigure = (e) => {
      let input = {
        zero: "0",
        one: "1",
        two: "2",
        three: "3",
        four: "4",
        five: "5",
        six: "6",
        seven: "7",
        eight: "8",
        nine: "9",
      }[e.target.id];

      e.preventDefault();
      setValue(input);
    };

    while (n < 10) {
      figureList.push(
        <input
          id={numberList[n].id}
          type="button"
          value={n}
          onClick={onClickFigure}
        />
      );
      n += 1;
    }

    const onClickSign = (e) => {
      let sign = {
        plus: "+",
        minus: "-",
        muliplication: "*",
        division: "/",
      }[e.target.id];

      e.preventDefault();
      setSign(sign);
      setResult();
    };
    while (i < calculationList.length) {
      signList.push(
        <input
          id={calculationList[i].id}
          type="button"
          value={calculationList[i].value}
          onClick={onClickSign}
        />
      );
      i += 1;
    }

    return (
      <div>
        {signList}
        {figureList}
      </div>
    );
  }
}

export default Button;
