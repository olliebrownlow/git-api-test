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
        <AppBar
          style={styles.appBar}
          position="static"
        >
          <Typography variant="h5">
            Discover someone's favourite programming language
          </Typography>
        </AppBar>
        <br/>
        <h1>Ever wanted to know someone's favourite programming language?</h1>
        <h2>Input a Github username and find out..</h2>
        <br/>
        <Button
          variant="contained"
          onClick={this.continue}
          style={styles.button}
          color="primary"
        >
          Continue
        </Button>
      </React.Fragment>
    );
  }
}

const styles = {
  button: {
    backgroundColor: '#ff3399',
    color: '#ffffff',
    margin: 15,
    width: 150
  },
  appBar: {
    background: '#ff3399',
    padding: '12px'
  }
}

export default EntryPoint;
