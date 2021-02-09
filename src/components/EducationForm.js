import React, { Fragment, Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.changeInput = this.props.changeInput.bind(this);
    this.onSubmitEducation = this.props.onSubmitEducation.bind(this);
  }

  render() {
    const { schoolInput, subjectInput, graduationYearInput } = this.props.info;
    const { onSubmitEducation, changeInput } = this.props;
    return (
      <Fragment>
        <h1>Education </h1>
        <label htmlFor="schoolInput">School</label>
        <input
          name="schoolInput"
          id="schoolInput"
          value={schoolInput}
          onChange={this.changeInput}
        />
        <label htmlFor="subjectInput">Subject</label>
        <input
          name="subjectInput"
          id="subjectInput"
          value={subjectInput}
          onChange={this.changeInput}
        />
        <label htmlFor="graduationYearInput">Year Graduated</label>
        <input
          name="graduationYearInput"
          id="graduationYearInput"
          value={graduationYearInput}
          onChange={changeInput}
        />
        <button onClick={onSubmitEducation}>Submit</button>
      </Fragment>
    );
  }
}

export default EducationForm;
