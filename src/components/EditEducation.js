import React, { Component } from "react";
import "../styles/editEducation.css";

class EditEducation extends Component {
  constructor(props) {
    super(props);
    this.changeInput = this.props.changeInput.bind(this);
    this.updateEducation = this.props.updateEducation.bind(this);
  }

  render() {
    const { data, changeInput, updateEducation } = this.props;
    return (
      <div className="editEducation">
        <form onSubmit={(e) => updateEducation(e, data.editEduId)}>
          <h3>EDIT EDUCATION</h3>
          <br />
          <label htmlFor="editSchool">School</label>
          <input
            id="editSchool"
            name="editSchool"
            value={data.editSchool}
            onChange={changeInput}
            required
          />
          <label htmlFor="editSubject">Subject</label>
          <input
            id="editSubject"
            name="editSubject"
            value={data.editSubject}
            onChange={changeInput}
            required
          />
          <label htmlFor="editDesc">Description</label>
          <textarea
            id="editDesc"
            name="editDesc"
            value={data.editDesc}
            onChange={changeInput}
          />
          <label htmlFor="editYear">Year</label>
          <input
            id="editYear"
            name="editYear"
            value={data.editYear}
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

export default EditEducation;
