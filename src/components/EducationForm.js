import React, { Fragment, Component } from "react";
import "../styles/educationForm.css";

class EducationForm extends Component {
  constructor(props) {
    super(props);
    this.changeInput = this.props.changeInput.bind(this);
    this.onSubmitEducation = this.props.onSubmitEducation.bind(this);
    this.deleteEducation = this.props.deleteEducation.bind(this);
  }

  render() {
    const {
      schoolInput,
      subjectInput,
      graduationYearInput,
    } = this.props.formInputs;
    const {
      education,
      onSubmitEducation,
      changeInput,
      deleteEducation,
    } = this.props;
    return (
      <form onSubmit={onSubmitEducation} className="form educationForm">
        <h2>Education </h2>
        <label htmlFor="schoolInput">School</label>
        <input
          name="schoolInput"
          id="schoolInput"
          value={schoolInput}
          onChange={this.changeInput}
          required
        />
        <label htmlFor="subjectInput">Subject</label>
        <input
          name="subjectInput"
          id="subjectInput"
          value={subjectInput}
          onChange={this.changeInput}
          required
        />
        <label htmlFor="graduationYearInput">Year Graduated</label>
        <input
          name="graduationYearInput"
          id="graduationYearInput"
          value={graduationYearInput}
          onChange={changeInput}
          required
          pattern="[0-9]{4}"
        />
        <button>Add Education</button>

        <p>Preview: </p>
        <ul>
          {education.length ? (
            education.map((edu) => (
              <li key={edu.id}>
                <h3>{edu.school}</h3>
                <p> {edu.subject}</p>
                <p>Graduated: {edu.year}</p>
                <button onClick={() => deleteEducation(edu.id)}>
                  Delete {edu.school}
                </button>
              </li>
            ))
          ) : (
            <p>No education</p>
          )}
        </ul>
      </form>
    );
  }
}

export default EducationForm;
