import React, { Component } from "react";
import "../styles/showCvControl.css";

class ShowCvControl extends Component {
  constructor(props) {
    super(props);
    this.toggleMode = this.props.toggleMode.bind(this);
  }

  render() {
    const { toggleMode, showWarning, showCV } = this.props;
    return (
      <div className="showCvControl">
        <button onClick={() => toggleMode()}>
          {showCV ? " Edit CV" : "Generate CV"}
        </button>
        {showWarning && (
          <p className="showCvControl__warning">
            Make sure you have provided your contact details, and added at least
            one education and one experience. (Don't forget to submit them!)
          </p>
        )}
      </div>
    );
  }
}

export default ShowCvControl;
