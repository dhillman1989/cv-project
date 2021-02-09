import React, { Component } from "react";
import "../styles/summary.css";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.deleteExperience = this.props.deleteExperience.bind(this);
    this.deleteEducation = this.props.deleteEducation.bind(this);
  }

  render() {
    const {
      personal,
      education,
      experience,
      deleteExperience,
      deleteEducation,
    } = this.props;

    return (
      <div className="summary">
        <h1>Summary</h1>
        <h2>{personal.fullName}</h2>
        <p>{personal.email}</p>
        <p>{personal.phone}</p>

        <h2>Education</h2>
        <ul>
          {education.length ? (
            education.map((edu) => (
              <li key={edu.id}>
                <h3>School: {edu.school}</h3>
                <h5>Subject of Study: {edu.subject}</h5>
                <h5>Year: {edu.year}</h5>
                <button onClick={() => deleteEducation(edu.id)}>
                  Delete {edu.school}
                </button>
              </li>
            ))
          ) : (
            <p>No education</p>
          )}
        </ul>

        <h2>Experience</h2>
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
                <button onClick={() => deleteExperience(exp.id)}>
                  Delete {exp.company}
                </button>
              </li>
            ))
          ) : (
            <p>No experience</p>
          )}
        </ul>
      </div>
    );
  }
}

export default Summary;
