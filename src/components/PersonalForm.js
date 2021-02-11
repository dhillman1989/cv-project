import React, { Fragment, Component } from "react";
import "../styles/personalForm.css";

class PersonalForm extends Component {
  constructor(props) {
    super(props);
    this.changeInput = this.props.changeInput.bind(this);
    this.onSubmitPersonal = this.props.onSubmitPersonal.bind(this);
  }

  render() {
    const {
      fullNameInput,
      phoneInput,
      emailInput,
      profileInput,
    } = this.props.formInputs;
    const { personal, onSubmitPersonal, changeInput } = this.props;
    return (
      <div className="personalForm">
        <form onSubmit={onSubmitPersonal}>
          <h2>Personal &amp; Contact Details</h2>
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
            onChange={changeInput}
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
          <label htmlFor="profileInput">Personal Paragraph</label>
          <textarea
            name="profileInput"
            id="profileInput"
            value={profileInput}
            onChange={changeInput}
            required
          />
          <button>Update Personal Details</button>

          <p>Preview:</p>

          <h2>{personal.fullName}</h2>
          <p>{personal.email}</p>
          <p>{personal.phone}</p>
          <p>{personal.profile}</p>
        </form>
      </div>
    );
  }
}

export default PersonalForm;
