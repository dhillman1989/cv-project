import React, { Component } from "react";
import "../styles/editExperience.css";

class EditExperience extends Component {
  constructor(props) {
    super(props);
    this.changeInput = this.props.changeInput.bind(this);
    this.updateExperience = this.props.updateExperience.bind(this);
  }

  render() {
    const { data, changeInput, updateExperience } = this.props;
    return (
      <div className="editExperience">
        <form onSubmit={(e) => updateExperience(e, data.editExpId)}>
          <h3>EDIT EXPERIENCE</h3>
          <br />
          <label htmlFor="editCompany">School</label>
          <input
            id="editCompany"
            name="editCompany"
            value={data.editCompany}
            onChange={changeInput}
            required
          />
          <label htmlFor="editJobTitle">Subject</label>
          <input
            id="editJobTitle"
            name="editJobTitle"
            value={data.editJobTitle}
            onChange={changeInput}
            required
          />
          <label htmlFor="editDuties">Description</label>
          <textarea
            id="editDuties"
            name="editDuties"
            value={data.editDuties}
            onChange={changeInput}
          />
          <label htmlFor="editYearFrom">Year</label>
          <input
            id="editYearFrom"
            name="editYearFrom"
            value={data.editYearFrom}
            onChange={changeInput}
            required
            pattern="[0-9]{4}"
          />
          <label htmlFor="editYearTo">Year</label>
          <input
            id="editYearTo"
            name="editYearTo"
            value={data.editYearTo}
            onChange={changeInput}
            required
            pattern="[0-9]{4}"
          />
          <button>Confirm Changes</button>
        </form>
      </div>
    );
  }
}

export default EditExperience;
