import React, { Fragment, Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/app.css";

///components
import PersonalForm from "./components/PersonalForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import ShowCvControl from "./components/ShowCvControl";
import GenerateCv from "./components/GenerateCv";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCV: false,
      showWarning: false,
      fullName: "",
      phone: "",
      email: "",
      fullNameInput: "",
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
          id: uuidv4(),
          school: this.state.schoolInput,
          subject: this.state.subjectInput,
          year: this.state.graduationYearInput,
        },
      ],
    });
    this.setState({
      schoolInput: "",
      subjectInput: "",
      graduationYearInput: "",
    });
  };

  onSubmitExperience = (e) => {
    e.preventDefault();
    this.setState({
      experience: [
        ...this.state.experience,
        {
          id: uuidv4(),
          company: this.state.companyInput,
          jobTitle: this.state.jobTitleInput,
          duties: this.state.dutiesInput,
          yearFrom: this.state.yearFromInput,
          yearTo: this.state.yearToInput,
        },
      ],
    });
    this.setState({
      companyInput: "",
      jobTitleInput: "",
      dutiesInput: "",
      yearFromInput: "",
      yearToInput: "",
    });
  };

  deleteExperience = (id) => {
    this.setState({
      experience: [...this.state.experience.filter((exp) => exp.id != id)],
    });
  };

  deleteEducation = (id) => {
    this.setState({
      education: [...this.state.education.filter((edu) => edu.id != id)],
    });
  };

  toggleMode = () => {
    if (
      this.state.fullName.length &&
      this.state.phone.length &&
      this.state.education.length &&
      this.state.email.length &&
      this.state.experience.length
    ) {
      this.setState({ showCV: !this.state.showCV, showWarning: false });
    } else {
      this.setState({ showWarning: true });
    }
  };

  render() {
    const {
      showCV,
      showWarning,
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

    //activate or disable Submission button

    return (
      <div id="App">
        {showCV == false ? (
          <Fragment>
            <PersonalForm
              formInputs={personalInputs}
              personal={{ fullName, email, phone }}
              changeInput={this.changeInput}
              onSubmitPersonal={this.onSubmitPersonal}
            />
            <EducationForm
              education={education}
              formInputs={educationInputs}
              changeInput={this.changeInput}
              onSubmitEducation={this.onSubmitEducation}
              deleteEducation={this.deleteEducation}
            />
            <ExperienceForm
              experience={experience}
              formInputs={experienceInputs}
              changeInput={this.changeInput}
              onSubmitExperience={this.onSubmitExperience}
              deleteExperience={this.deleteExperience}
            />
            <ShowCvControl
              toggleMode={this.toggleMode}
              showWarning={showWarning}
            />
          </Fragment>
        ) : (
          <GenerateCv
            personal={{ fullName, email, phone }}
            experience={experience}
            education={education}
            toggleMode={this.toggleMode}
          />
        )}
      </div>
    );
  }
}

export default App;
