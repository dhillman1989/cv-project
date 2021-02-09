import React, { Fragment, Component } from "react";

///components
import PersonalForm from "./components/PersonalForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import Summary from "./components/Summary";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      phone: "",
      email: "",
      fullNameInput: "fred",
      phoneInput: "",
      emailInput: "",
      education: [],
      experience: [],
      schoolInput: "",
      subjectInput: "",
      graduationYearInput: "",
      companyInput: "",
      jobTitleInput: "",
      dutiesInput: "",
      yearFromInput: "",
      yearToInput: "",
    };
  }

  changeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitPersonal = (e) => {
    e.preventDefault();
    this.setState({
      fullName: this.state.fullNameInput,
      phone: this.state.phoneInput,
      email: this.state.emailInput,
    });
  };

  onSubmitEducation = (e) => {
    e.preventDefault();
    this.setState({
      education: [
        ...this.state.education,
        {
          school: this.state.schoolInput,
          subject: this.state.subjectInput,
          year: this.state.graduationYearInput,
        },
      ],
    });
  };

  onSubmitExperience = (e) => {
    e.preventDefault();
    this.setState({
      experience: [
        ...this.state.experience,
        {
          company: this.state.companyInput,
          subject: this.state.jobTitleInput,
          duties: this.state.dutiesInput,
          yearFrom: this.state.yearFromInput,
          yearTo: this.state.yearToInput,
        },
      ],
    });
    this.setState({
      schoolInput: "",
      subjectInput: "",
      graduationYearInput: "",
    });
  };

  render() {
    const {
      fullName,
      email,
      phone,
      fullNameInput,
      phoneInput,
      emailInput,
      schoolInput,
      subjectInput,
      graduationYearInput,
      companyInput,
      jobTitleInput,
      dutiesInput,
      yearFromInput,
      yearToInput,
      education,
      experience,
    } = this.state;
    const personalInputs = { fullNameInput, phoneInput, emailInput };
    const educationInputs = { schoolInput, subjectInput, graduationYearInput };
    const experienceInputs = {
      companyInput,
      jobTitleInput,
      dutiesInput,
      yearFromInput,
      yearToInput,
    };
    return (
      <Fragment>
        <PersonalForm
          info={personalInputs}
          changeInput={this.changeInput}
          onSubmitPersonal={this.onSubmitPersonal}
        />
        <EducationForm
          info={educationInputs}
          changeInput={this.changeInput}
          onSubmitEducation={this.onSubmitEducation}
        />
        <ExperienceForm
          info={experienceInputs}
          changeInput={this.changeInput}
          onSubmitExperience={this.onSubmitExperience}
        />
        <Summary
          personal={{ fullName, email, phone }}
          education={education}
          experience={experience}
        />
      </Fragment>
    );
  }
}

export default App;
