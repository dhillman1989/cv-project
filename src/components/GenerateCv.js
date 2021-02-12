import React, { PureComponent } from "react";
import "../styles/generateCv.css";

class GenerateCv extends PureComponent {
  constructor(props) {
    super(props);
    this.toggleMode = this.props.toggleMode.bind(this);
  }

  render() {
    const { personal, education, experience, toggleMode } = this.props;
    return (
      <div className="generateCv">
        <div className="generateCv__page">
          <div className="generateCv__personal">
            <h1>{personal.fullName}</h1>
            <p className="generateCv__email">{personal.email}</p>
            <p className="generateCv__phone">{personal.phone}</p>
          </div>
          <div className="generateCv__profile">{personal.profile}</div>
          <div class="generateCv__row">
            <div className="generateCv__education">
              <h2>Education History</h2>
              <ul>
                {education.length ? (
                  education.map((edu) => (
                    <li key={edu.id} className="generateCv__education-item">
                      <h3>{edu.school}</h3>
                      <p className="generateCv__subject">
                        {edu.subject} - {edu.year}
                      </p>
                      <p className="generateCv__desc">{edu.desc}</p>
                    </li>
                  ))
                ) : (
                  <li className="generateCv__empty"></li>
                )}
              </ul>
            </div>
            <div className="generateCv__experience">
              <h2>Work Experience</h2>
              <ul>
                {experience.length ? (
                  experience.map((exp) => (
                    <li key={exp.id} className="generateCv__experience-item">
                      <h3>{exp.company}</h3>
                      <p className="generateCv__jobTitle">{exp.jobTitle}</p>
                      <p>
                        from {exp.yearFrom} to {exp.yearTo}
                      </p>
                      <p className="generateCv__duties">{exp.duties}</p>
                    </li>
                  ))
                ) : (
                  <li className="generateCv__empty"></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenerateCv;
