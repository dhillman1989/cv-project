import React, { Fragment, Component } from "react";

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
      <Fragment>
        <h1>Experience</h1>
        <label htmlFor="companyInput">Company</label>
        <input
          name="companyInput"
          id="companyInput"
          value={companyInput}
          onChange={this.changeInput}
        />
        <label htmlFor="jobTitleInput">Job Title</label>
        <input
          name="jobTitleInput"
          id="jobTitleInput"
          value={jobTitleInput}
          onChange={this.changeInput}
        />
        <label htmlFor="dutiesInput">Duties</label>
        <input
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
        />
        <label htmlFor="yearToInput">To</label>
        <input
          name="yearToInput"
          id="yearToInput"
          value={yearToInput}
          onChange={this.changeInput}
        />
        <button onClick={onSubmitExperience}>Submit</button>
      </Fragment>
    );
  }
}

export default ExperienceForm;
