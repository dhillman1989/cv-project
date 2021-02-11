import React, { Component } from "react";
import "../styles/CvControl.css";

class CvControl extends Component {
  constructor(props) {
    super(props);
    this.toggleMode = this.props.toggleMode.bind(this);
    this.saveForLater = this.props.saveForLater.bind(this);
  }

  render() {
    const { toggleMode, showWarning, showCV, saveForLater } = this.props;
    return (
      <div className="CvControl">
        <div className="buttons">
          <button onClick={() => saveForLater()}>Save For Later</button>
          <button onClick={() => toggleMode()}>
            {showCV ? "Edit CV" : "Generate CV"}
          </button>
        </div>
        {showWarning && (
          <p className="CvControl__warning">
            Make sure you have provided your contact details, and added at least
            one education and one experience. (Don't forget to submit them!)
          </p>
        )}
      </div>
    );
  }
}

export default CvControl;
