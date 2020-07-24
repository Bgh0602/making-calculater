import React from "react";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.ctx = null;
  }

  componentDidMount() {
    this.ctx = this.canvasRef.current.getContext("2d");
  }

  render() {
    return <canvas id="canvas" ref={this.canvasRef} />;
  }
}

export default Canvas;
