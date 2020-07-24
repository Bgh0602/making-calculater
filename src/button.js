import React from "react";
import "./button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.calculationList = [
      { id: "plus", value: "+" },
      { id: "minus", value: "-" },
      { id: "muliplication", value: "*" },
      { id: "division", value: "/" },
      { id: "equality", value: "=" },
      { id: "reset", value: "A.C" },
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
    var i = 0;
    var lists = [];
    var calculation = this.calculationList;

    var n = 0;
    var List = [];
    var numberList = this.numberList;
    while (i < calculation.length) {
      lists.push(
        <input
          id={calculation[i].id}
          type="button"
          value={calculation[i].value}
        />
      );
      i += 1;
    }

    while (n < 10) {
      List.push(
        <input
          id={numberList[n].id}
          type="button"
          value={n}
          onClick={() => {}}
        />
      );
      n += 1;
    }
    return (
      <div>
        {lists} {List}
      </div>
    );
  }
}

export default Button;
