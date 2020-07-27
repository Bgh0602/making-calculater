import React from "react";
import "./Result.css";
import "./Button.css";

class Result extends React.Component {
  render() {
    return (
      <form>
        <input id="result" type="text" value={this.props.value}></input>
        <input id="reset" type="reset" value="A.C"></input>
      </form>
    );
  }
}

export default Result;
