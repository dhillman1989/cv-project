import React, { Component } from "react";
import "../styles/showCvControl.css";

class ShowCvControl extends Component {
  constructor(props) {
    super(props);
    this.toggleMode = this.props.toggleMode.bind(this);
  }

  render() {
    return (
      <div className="showCvControl">
        <button onClick={() => this.toggleMode()}>Generate CV</button>
      </div>
    );
  }
}

export default ShowCvControl;
