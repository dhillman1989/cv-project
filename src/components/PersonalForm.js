import React, { Fragment, Component } from "react";
import "../styles/personalForm.css";

class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.changeInput = this.props.changeInput.bind(this);
    this.onSubmitPersonal = this.props.onSubmitPersonal.bind(this);
  }

  render() {
    const { fullNameInput, phoneInput, emailInput } = this.props.info;
    const { onSubmitPersonal, changeInput } = this.props;
    return (
      <form onSubmit={onSubmitPersonal} className="form personalForm">
        <h1>Personal &amp; Contact Details</h1>
        <label htmlFor="fullNameInput">Full Name</label>
        <input
          name="fullNameInput"
          id="fullNameInput"
          value={fullNameInput}
          onChange={this.changeInput}
          required
        />
        <label htmlFor="phoneInput">Phone Number</label>
        <input
          name="phoneInput"
          id="phoneInput"
          value={phoneInput}
          onChange={this.changeInput}
          required
          pattern="[0-9]{11}"
        />
        <label htmlFor="emailInput">Email </label>
        <input
          name="emailInput"
          id="emailInput"
          value={emailInput}
          onChange={changeInput}
          required
        />
        <button>Update Personal Details</button>
      </form>
    );
  }
}

export default PersonalForm;
