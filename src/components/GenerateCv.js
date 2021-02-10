import React, { PureComponent } from "react";

class GenerateCv extends PureComponent {
  constructor(props) {
    super(props);
    this.toggleMode = this.props.toggleMode.bind(this);
  }

  render() {
    const { personal, education, experience, toggleMode } = this.props;
    return (
      <div className="cv-page">
        <div className="cv-page__personal">
          <h1>{personal.fullName}</h1>
          <p className="cv-page__email">{personal.email}</p>
          <p className="cv-page__phone">{personal.phone}</p>
        </div>
        <div className="cv-page__education">
          <ul>
            {education.length ? (
              education.map((edu) => (
                <li key={edu.id} className="cv-page__education-item">
                  <h2>{edu.school}</h2>
                  <p>
                    {edu.subject} - {edu.year}
                  </p>
                </li>
              ))
            ) : (
              <li className="cv-page__empty"></li>
            )}
          </ul>
        </div>
        <div className="cv-page__experience">
          <ul>
            {experience.length ? (
              experience.map((exp) => (
                <li key={exp.id} className="cv-page__experience-item">
                  <h2>{exp.company}</h2>
                  <p>
                    {exp.jobTitle} // {exp.yearFrom} {exp.yearTo}
                  </p>
                </li>
              ))
            ) : (
              <li className="cv-page__empty"></li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default GenerateCv;
