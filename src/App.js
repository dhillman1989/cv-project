import React, { Fragment, Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "fred",
      phone: "",
      email: "",
      education: [],
      experience: [],
    };
  }

  changeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name);
    console.log(this.state.phone);
  };

  render() {
    const { name, phone, email, education, experience } = this.state;
    return (
      <Fragment>
        <input name="name" id="name" value={name} onChange={this.changeInput} />
        <input
          name="phone"
          id="phone"
          value={phone}
          onChange={this.changeInput}
        />
        <button onClick={this.onSubmit}>Submit</button>
      </Fragment>
    );
  }
}

export default App;
