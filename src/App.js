import React, { Fragment, Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./styles/app.css";

///components
import PersonalForm from "./components/PersonalForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import CvControl from "./components/CvControl";
import GenerateCv from "./components/GenerateCv";
import EditEducation from "./components/EditEducation";
import EditExperience from "./components/EditExperience";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = JSON.parse(localStorage.getItem("CvState")) || {
      editingEducation: false,
      editingExperience: false,
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
      editEduId: "",
      editSchool: "",
      editSubject: "",
      editDesc: "",
      editYear: "",
      editExpId: "",
      editCompany: "",
      editJobTitle: "",
      editDuties: "",
      editYearFrom: "",
      editYearTo: "",
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
    let data = this.state.education.find((edu) => edu.id == id);
    this.setState({
      editingEducation: true,
      editSchool: data.school,
      editSubject: data.subject,
      editDesc: data.desc,
      editYear: data.year,
      editEduId: data.id,
    });
  };

  loadEditExperience = (e, id) => {
    e.preventDefault();
    let data = this.state.experience.find((exp) => exp.id == id);
    this.setState({
      editingExperience: true,
      editCompany: data.company,
      editJobTitle: data.jobTitle,
      editDuties: data.duties,
      editYearTo: data.yearTo,
      editYearFrom: data.yearFrom,
      editExpId: data.id,
    });
  };

  updateEducation = (e, id) => {
    e.preventDefault();
    let index = this.state.education.findIndex((edu) => edu.id == id);
    const newObj = [...this.state.education];

    newObj.splice(index, 1, {
      school: this.state.editSchool,
      subject: this.state.editSubject,
      year: this.state.editYear,
      desc: this.state.editDesc,
    });
    this.setState({ education: newObj, editingEducation: false });
  };

  deleteEducation = (id) => {
    this.setState({
      education: [...this.state.education.filter((edu) => edu.id != id)],
    });
  };

  updateExperience = (e, id) => {
    e.preventDefault();
    let index = this.state.experience.findIndex((exp) => exp.id == id);
    const newObj = [...this.state.experience];

    newObj.splice(index, 1, {
      id,
      company: this.state.editCompany,
      jobTitle: this.state.editJobTitle,
      yearFrom: this.state.editYearFrom,
      yearTo: this.state.editYearTo,
      duties: this.state.editDuties,
    });
    this.setState({ experience: newObj, editingExperience: false });
  };

  deleteExperience = (id) => {
    this.setState({
      experience: [...this.state.experience.filter((exp) => exp.id != id)],
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

  saveForLater = () => {
    localStorage.setItem("CvState", JSON.stringify(this.state));
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
      editSchool,
      editSubject,
      editDesc,
      editYear,
      editEduId,
      editCompany,
      editJobTitle,
      editDuties,
      editYearFrom,
      editYearTo,
      editExpId,
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
              loadEditExperience={this.loadEditExperience}
            />
            {editingEducation && (
              <EditEducation
                data={{
                  editSchool,
                  editSubject,
                  editDesc,
                  editYear,
                  editEduId,
                }}
                changeInput={this.changeInput}
                updateEducation={this.updateEducation}
              />
            )}
            {editingExperience && (
              <EditExperience
                data={{
                  editCompany,
                  editJobTitle,
                  editDuties,
                  editYearFrom,
                  editYearTo,
                  editExpId,
                }}
                changeInput={this.changeInput}
                updateExperience={this.updateExperience}
              />
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
        <CvControl
          showCV={showCV}
          toggleMode={this.toggleMode}
          showWarning={showWarning}
          saveForLater={this.saveForLater}
        />
      </div>
    );
  }
}

export default App;
