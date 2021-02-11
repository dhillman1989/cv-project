import React, { Component } from "react";
import "../styles/editEducation.css";

class EditEducation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div className="editEducation">
        EDIT EDUCATION
        <form>
          <input value={data.school}></input>
          <input value={data.subject}></input>
          <input value={data.desc}></input>
          <input value={data.year}></input>
        </form>
      </div>
    );
  }
}

export default EditEducation;
