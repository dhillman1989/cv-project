import React, { Fragment, Component } from "react";
import "../styles/experienceForm.css";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.changeInput = this.props.changeInput.bind(this);
    this.onSubmitExperience = this.props.onSubmitExperience.bind(this);
  }

  render() {
    const {
      companyInput,
      jobTitleInput,
      dutiesInput,
      yearToInput,
      yearFromInput,
    } = this.props.info;
    const { onSubmitExperience, changeInput } = this.props;
    return (
      <form onSubmit={onSubmitExperience} className="form experienceForm">
        <h1>Experience</h1>
        <label htmlFor="companyInput">Company</label>
        <input
          name="companyInput"
          id="companyInput"
          value={companyInput}
          onChange={this.changeInput}
          required
        />
        <label htmlFor="jobTitleInput">Job Title</label>
        <input
          name="jobTitleInput"
          id="jobTitleInput"
          value={jobTitleInput}
          onChange={this.changeInput}
          required
        />
        <label htmlFor="dutiesInput">Duties (optional)</label>
        <textarea
          name="dutiesInput"
          id="dutiesInput"
          value={dutiesInput}
          onChange={changeInput}
        />
        <label htmlFor="yearFromInput">From:</label>
        <input
          name="yearFromInput"
          id="yearFromInput"
          value={yearFromInput}
          onChange={this.changeInput}
          required
        />
        <label htmlFor="yearToInput">To</label>
        <input
          name="yearToInput"
          id="yearToInput"
          value={yearToInput}
          onChange={this.changeInput}
          required
        />
        <button>Add Experience</button>
      </form>
    );
  }
}

export default ExperienceForm;
