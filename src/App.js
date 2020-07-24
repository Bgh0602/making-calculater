import React from "react";
import Canvas from "./canvas";
import Button from "./button";
import Result from "./result";
import "./canvas.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Canvas />
        <Button></Button>
        <Result></Result>
      </>
    );
  }
}

export default App;
