import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';

export class EntryPoint extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </header>
        <AppBar style={{ background: '#ff3399', padding: '12px' }} position="static">
          <Typography variant="h6">
            Discover someone's favourite programming language
          </Typography>
        </AppBar>
        <br/>
        <h1>Ever wanted to know someone's favourite programming language?</h1>
        <h2>Input a username and find out</h2>
        <br/>
        <Button
          variant="contained"
          onClick={this.continue}
        >
          Continue
        </Button>
      </React.Fragment>
    );
  }

}

export default EntryPoint;
