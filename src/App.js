import React from "react";
import Canvas from "./canvas";
import Button from "./button";
import "./canvas.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Canvas />
        <Button></Button>
      </>
    );
  }
}

export default App;
