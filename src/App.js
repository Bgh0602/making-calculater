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
      result: "",
      value: "",
    };
  }

  render() {
    let value = this.state.value;
    let result = this.state.result;
    console.log("result : ", result);
    console.log("value :", value);

    return (
      <>
        <Canvas />
        <Button
          setValue={(newValue) => this.setState({ result: result + newValue })}
          setSign={(newSign) => this.setState({ value: result + newSign })}
          setResult={() => this.setState({ result: "" })}
        />
        <Result
          onClickDot={() => this.setState({ result: result + "." })}
          onClickEquality={() =>
            this.setState({ result: calculate(value + result) })
          }
          result={result}
          onClickReset={() => this.setState({ result: "", value: "" })}
          onClickDelete={() =>
            this.setState({ result: String(result).slice(0, -1) })
          }
        />
      </>
    );
  }
}

export default App;
