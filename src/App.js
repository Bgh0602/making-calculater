import React from "react";
import Canvas from "./Canvas";
import Button from "./Button";
import Result from "./Result";
import "./Canvas.css";

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
          setValue={(newValue) => this.setState({ value: value + newValue })}
        />
        <Result value={value} />
      </>
    );
  }
}

export default App;
