import React, { Component } from 'react';
import axios from 'axios'
import EntryPoint from './EntryPoint';
import FormGithubUsername from './FormGithubUsername';
import Results from './Results';
import UnrecognisedUsername from './UnrecognisedUsername';

const API_URL_START = 'https://api.github.com/users/';
const API_URL_END = '/repos?per_page=1000';

export class UserForm extends Component {
  state = {
      step: 1,
      username: "",
      favouriteLanguage: null,
      frequency: null,
      numberOfRepos: null
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

  // go to username input page
  usernameInputStep = () => {
    this.setState({
      step: 2
    });
  }

  // go to unrecognised username page
  unrecognisedUsernameStep = () => {
    this.setState({
      step: 4
    });
  }

  // handle fields change
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  getGithubData = () => {
    const url = `${API_URL_START}${this.state.username}${API_URL_END}`;
    axios.get(url)
    .then(response => response.data)
    .then((data) => {
      this.setStateVariables(data);
      this.nextStep();
    }).catch(error => {
      this.unrecognisedUsernameStep();
      console.log('check login error', error);
    });
  }

  setStateVariables = (data) => {
    const language = this.calculateStateVariables(data)[0];
    const frequency = this.calculateStateVariables(data)[1];
    const totalRepos = this.calculateStateVariables(data)[2];
    if (language && frequency && totalRepos) {
      this.setState({
        favouriteLanguage: language.toUpperCase(),
        frequency: frequency,
        numberOfRepos: totalRepos
      });
    } else {
      console.log("ohno!");
      this.setState({
        favouriteLanguage: "insufficient data",
        frequency: "insufficient data",
        numberOfRepos: "insufficient data"
      });
    }
  }

  calculateStateVariables = (data) => {
    const languagesArray = data.map((repo) => (
      repo.language
    ))
    var frequency = 1;
    var count = 0;
    var language;
    for (var i = 0; i < languagesArray.length; i++) {
      for (var j = i; j < languagesArray.length; j++) {
        if (languagesArray[i] === languagesArray[j])
          count++;
        if (frequency < count) {
          frequency = count;
          language = languagesArray[i];
        }
      }
      count = 0;
    }
    return [language, frequency, languagesArray.length]
  }

  render() {
    const { step } = this.state;
    const { username, numberOfRepos, favouriteLanguage, frequency } = this.state;
    const values = { username, numberOfRepos, favouriteLanguage, frequency }

    switch(step) {
      case 1:
        return (
          <EntryPoint
            nextStep={this.nextStep}
          />
        )
      case 2:
        return (
          <FormGithubUsername
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            getGithubData={this.getGithubData}
            values={values}
          />
        )
      case 3:
        return (
          <Results
            prevStep={this.prevStep}
            values={values}
          />
        )
      case 4:
        return (
          <UnrecognisedUsername
            usernameInputStep={this.usernameInputStep}
            values={values}
          />
        )
    }
  }
}

export default UserForm;
