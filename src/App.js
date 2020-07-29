import React from "react";
import Canvas from "./Canvas";
import Button from "./Button";
import Result from "./Result";
import "./Canvas.css";

function calculate(statement) {
  return eval(statement);
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

  render() {
    const value = this.state.value;

    return (
      <>
        <Canvas />
        <Button
          setValue={(newValue, newSign) =>
            this.setState({ value: value + newSign + newValue })
          }
        />
        <Result
          onClickReset={() => this.setState({ value: "" })}
          onClickDelete={() => this.setState({ value: value.slice(0, -1) })}
          onClickDot={() => this.setState({ value: value + "." })}
          onClickEquality={() => this.setState({ value: calculate(value) })}
          value={value}
        />
      </>
    );
  }
}

export default App;
