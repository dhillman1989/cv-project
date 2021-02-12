import React, { Fragment, Component } from "react";
import "../styles/experienceForm.css";

class ExperienceForm extends Component {
  constructor(props) {
    super(props);
    this.changeInput = this.props.changeInput.bind(this);
    this.onSubmitExperience = this.props.onSubmitExperience.bind(this);
    this.deleteExperience = this.props.deleteExperience.bind(this);
    this.loadEditExperience = this.props.loadEditExperience.bind(this);
  }

  render() {
    const {
      companyInput,
      jobTitleInput,
      dutiesInput,
      yearToInput,
      yearFromInput,
    } = this.props.formInputs;
    const {
      experience,
      onSubmitExperience,
      changeInput,
      deleteExperience,
      loadEditExperience,
    } = this.props;
    return (
      <div className="form experienceForm">
        <form onSubmit={onSubmitExperience}>
          <h2>Experience</h2>
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
            pattern="[0-9]{4}"
          />
          <label htmlFor="yearToInput">To</label>
          <input
            name="yearToInput"
            id="yearToInput"
            value={yearToInput}
            onChange={this.changeInput}
            required
            pattern="[0-9]{4}"
          />
          <button>Add Experience</button>

          <p>Preview:</p>

          <ul>
            {experience.length ? (
              experience.map((exp) => (
                <li key={exp.id}>
                  <h3>Company: {exp.company}</h3>
                  <h5>Job Title: {exp.jobTitle}</h5>
                  <h5>
                    Years: {exp.yearFrom} - {exp.yearTo}
                  </h5>
                  <p>Duties: {exp.duties}</p>
                  <button onClick={(e) => loadEditExperience(e, exp.id)}>
                    Edit
                  </button>
                  <button onClick={() => deleteExperience(exp.id)}>
                    Delete {exp.company}
                  </button>
                </li>
              ))
            ) : (
              <p>No experience</p>
            )}
          </ul>
        </form>
        {experience.length > 0 && (
          <i class="far fa-check-circle experienceForm__completeMarker" />
        )}
      </div>
    );
  }
}

export default ExperienceForm;
