import React from "react";
import "./Button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.calculationList = [
      { id: "plus", value: "+" },
      { id: "minus", value: "-" },
      { id: "muliplication", value: "*" },
      { id: "division", value: "/" },
      { id: "equality", value: "=" },
      { id: "delete", value: "DEL" },
      { id: "dot", value: "." },
    ];
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
  }

  render() {
    const setValue = this.props.setValue;
    let i = 0;
    let signList = [];
    let calculationList = this.calculationList;

    let n = 0;
    let figureList = [];
    let numberList = this.numberList;
    while (i < calculationList.length) {
      signList.push(
        <input
          id={calculationList[i].id}
          type="button"
          value={calculationList[i].value}
          onClick={() => {}}
        />
      );
      i += 1;
    }

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
    return (
      <div>
        {signList}
        {figureList}
      </div>
    );
  }
}

export default Button;
