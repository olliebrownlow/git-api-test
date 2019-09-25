import React, { Component } from 'react';
import EntryPoint from './EntryPoint';

export class UserForm extends Component {
  state = {
      step: 1,
      username: "",
      repos: [],
      languages: []
  }

  // proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  }

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  }

  // go to unrecognised username page
  unrecognisedUsernameStep = () => {
    const { step } = this.state;
    this.setState({
      step: 4
    });
  }

  // go back to username entry page
  usernameEntryStep = () => {
    const { step } = this.state;
    this.setState({
      step: 2
    });
  }

  // handle fields change
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  }

  render() {
    const { step } = this.state;
    const { username, repos, languages } = this.state;
    const values = { username, repos, languages }

    switch(step) {
      case 1:
      return (
        <EntryPoint
          nextStep={this.nextStep}
        />
      )
      case 2:
        return <h1>FormGithubUsername</h1>
      case 3:
        return <h1>Results</h1>
      case 4:
        return <h1>UnrecognisedUsername</h1>
    }
  }
}

export default UserForm;
