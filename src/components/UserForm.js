import React, { Component } from 'react';
import axios from 'axios'
import EntryPoint from './EntryPoint';
import FormGithubUsername from './FormGithubUsername';
import Results from './Results';
import UnrecognisedUsername from './UnrecognisedUsername';
import NoNetwork from './NoNetwork';
import githubUserData from '../logic/githubUserData';

const API_URL_START = 'https://api.github.com/users/';
const API_URL_END = '/repos?per_page=100';

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

  // go to no network page
  noNetworkStep = () => {
    this.setState({
      step: 5
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
      console.log('check login error', error);
      if (!error.response) {
        this.noNetworkStep();
      } else {
        this.unrecognisedUsernameStep();
      }
    });
  }

  setStateVariables = (data) => {
    const info = new githubUserData(data);
    const favLanguage = info.nameAndFrequency()[0];
    const frequency = info.nameAndFrequency()[1];
    const totalRepos = info.numOfRepos().length;
    if (favLanguage && frequency && totalRepos) {
      this.setState({
        favouriteLanguage: favLanguage.toUpperCase(),
        frequency: frequency,
        numberOfRepos: totalRepos
      });
    } else {
      console.log("Oh no, not enough data in this request!");
      this.setState({
        favouriteLanguage: "insufficient data",
        frequency: "insufficient data",
        numberOfRepos: "insufficient data"
      });
    }
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
      case 5:
        return (
          <NoNetwork
            usernameInputStep={this.usernameInputStep}
            values={values}
          />
        )
    }
  }
}

export default UserForm;
