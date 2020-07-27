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

    while (n < 10) {
      figureList.push(
        <input
          id={numberList[n].id}
          type="button"
          value={n}
          onClick={(e) => {
            let input = 0;
            if (numberList[0].id === "zero") {
              input = 0;
            } else if (numberList[1].id === "one") {
              input = 1;
            } else if (numberList[2].id === "two") {
              input = 2;
            } else if (numberList[3].id === "three") {
              input = 3;
            } else if (numberList[4].id === "four") {
              input = 4;
            } else if (numberList[5].id === "five") {
              input = 5;
            } else if (numberList[6].id === "six") {
              input = 6;
            } else if (numberList[7].id === "seven") {
              input = 7;
            } else if (numberList[8].id === "eight") {
              input = 8;
            } else if (numberList[9].id === "nine") {
              input = 9;
            }
            e.preventDefault();
            return input;
          }}
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
