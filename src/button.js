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
    ];
  }

  render() {
    var i = 0;
    var lists = [];
    var calculation = this.calculationList;
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
    while (i < 10) {}
    return <div>{lists}</div>;
  }
}

export default Button;
