import React from "react";
import "./Result.css";
import "./Button.css";

class Result extends React.Component {
  render() {
    return (
      <div>
        <input id="result" type="text" value={this.props.value}></input>
        <input id="reset" type="button" value="A.C"></input>
      </div>
    );
  }
}

export default Result;
