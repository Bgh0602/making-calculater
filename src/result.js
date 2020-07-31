import React from "react";
import "./Result.css";
import "./Button.css";

class Result extends React.Component {
  render() {
    return (
      <div>
        <input id="result" type="text" value={this.props.result}></input>
        <input
          id="reset"
          type="button"
          value="A.C"
          onClick={this.props.onClickReset}
        ></input>
        <input
          id="delete"
          type="button"
          value="DEL"
          onClick={this.props.onClickDelete}
        ></input>
        <input
          id="dot"
          type="button"
          value="."
          onClick={this.props.onClickDot}
        ></input>
        <input
          id="equality"
          type="button"
          value="="
          onClick={this.props.onClickEquality}
        ></input>
      </div>
    );
  }
}

export default Result;
