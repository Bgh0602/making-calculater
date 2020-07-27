import React from "react";
import Canvas from "./Canvas";
import Button from "./Button";
import Result from "./Result";
import "./Canvas.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Canvas />
        <Button></Button>
        <Result value="hi"></Result>
      </>
    );
  }
}

export default App;
