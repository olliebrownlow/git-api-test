import React, { Component } from 'react';
import axios from 'axios'
import EntryPoint from './EntryPoint';
import FormGithubUsername from './FormGithubUsername';
import Results from './Results';

const API_URL_START = 'https://api.github.com/users/';
const API_URL_END = '/repos?per_page=1000';

export class UserForm extends Component {
  state = {
      step: 1,
      username: "",
      numberOfRepos: null,
      favouriteLanguage: null,
      frequency: null
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
    this.setState({
      step: 4
    });
  }

  // go to username entry page
  usernameEntryStep = () => {
    this.setState({
      step: 2
    });
  }

  // go to results page
  resultsStep = () => {
    this.setState({
      step: 3
    });
  }

  // handle fields change
  handleChange = input => e => {
    this.setState({[input]: e.target.value});
  }

  setRepos = () => {
    const url = `${API_URL_START}${this.state.username}${API_URL_END}`;
    axios.get(url)
    .then(response => response.data)
    .then((data) => {
      this.setLanguageAndFrequency(data);
      this.resultsStep();
    }).catch(error => {
      console.log('check login error', error);
    });
  }

  setLanguageAndFrequency = (data) => {
    const languagesArray = data.map((repo) => (
      repo.language
    ))
    var frequency = 1;
    var count = 0;
    var item;
    for (var i = 0; i < languagesArray.length; i++) {
      for (var j = i; j < languagesArray.length; j++) {
        if (languagesArray[i] === languagesArray[j])
          count++;
        if (frequency < count) {
          frequency = count;
          item = languagesArray[i];
        }
      }
      count = 0;
    }
    this.setState({
      numberOfRepos: languagesArray.length,
      favouriteLanguage: item,
      frequency: frequency
    });
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
            setRepos={this.setRepos}
            values={values}
          />
        )
      case 3:
        return (
          <Results
            usernameEntryStep={this.usernameEntryStep}
            values={values}
          />
        )
      case 4:
        return <h1>UnrecognisedUsername</h1>
    }
  }
}

export default UserForm;
