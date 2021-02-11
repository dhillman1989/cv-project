import React, { Fragment, Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/app.css";

///components
import PersonalForm from "./components/PersonalForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import ShowCvControl from "./components/ShowCvControl";
import GenerateCv from "./components/GenerateCv";
import EditEducation from "./components/EditEducation";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editingEducation: { status: false, data: null },
      editingExperience: { status: false, data: null },
      showCV: false,
      showWarning: false,
      fullName: "",
      phone: "",
      email: "",
      profile: "",
      profileInput: "",
      fullNameInput: "",
      phoneInput: "",
      emailInput: "",
      education: [],
      experience: [],
      schoolInput: "",
      eduDescInput: "",
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
      profile: this.state.profileInput,
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
          desc: this.state.eduDescInput,
        },
      ],
    });
    this.setState({
      schoolInput: "",
      subjectInput: "",
      graduationYearInput: "",
      eduDescInput: "",
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

  loadEditEducation = (e, id) => {
    e.preventDefault();
    console.log("loading");
    let data = this.state.education.find((edu) => edu.id == id);
    console.log(data);
    this.setState({
      editingEducation: { status: true, data: data },
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
    // if (
    //   this.state.fullName.length &&
    //   this.state.phone.length &&
    //   this.state.education.length &&
    //   this.state.email.length &&
    //   this.state.experience.length
    // ) {
    //   this.setState({ showCV: !this.state.showCV, showWarning: false });
    // } else {
    //   this.setState({ showWarning: true });
    // }
    this.setState({ showCV: !this.state.showCV, showWarning: false });
  };

  render() {
    const {
      editingEducation,
      editingExperience,
      showCV,
      showWarning,
      fullName,
      email,
      phone,
      profile,
      profileInput,
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
      eduDescInput,
      experience,
    } = this.state;
    const personalInputs = {
      fullNameInput,
      phoneInput,
      emailInput,
      profileInput,
    };
    const educationInputs = {
      schoolInput,
      subjectInput,
      eduDescInput,
      graduationYearInput,
    };
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
              personal={{ fullName, email, phone, profile }}
              changeInput={this.changeInput}
              onSubmitPersonal={this.onSubmitPersonal}
            />
            <EducationForm
              education={education}
              formInputs={educationInputs}
              changeInput={this.changeInput}
              eduDescInput={eduDescInput}
              onSubmitEducation={this.onSubmitEducation}
              deleteEducation={this.deleteEducation}
              loadEditEducation={this.loadEditEducation}
            />
            <ExperienceForm
              experience={experience}
              formInputs={experienceInputs}
              changeInput={this.changeInput}
              onSubmitExperience={this.onSubmitExperience}
              deleteExperience={this.deleteExperience}
            />
            {editingEducation.status == true && (
              <EditEducation data={editingEducation.data} />
            )}
          </Fragment>
        ) : (
          <GenerateCv
            personal={{ fullName, email, phone, profile }}
            experience={experience}
            education={education}
            toggleMode={this.toggleMode}
          />
        )}
        <ShowCvControl
          showCV={showCV}
          toggleMode={this.toggleMode}
          showWarning={showWarning}
        />
      </div>
    );
  }
}

export default App;
