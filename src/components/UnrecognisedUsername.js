import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';

export class UnrecognisedUsername extends Component {

  tryAgain = e => {
    e.preventDefault();
    this.props.usernameInputStep();
  }

  render() {
    const { values } = this.props;
    return (
      <React.Fragment>
        <AppBar style={{ background: '#ff3399', padding: '12px' }} position="static">
          <Typography variant="h5">
            Unrecognised Github username
          </Typography>
        </AppBar>
        <br/>
        <h1>Cannot find the Github username</h1>
        <h1>{values.username}</h1>
        <br/>
        <Button
          variant="contained"
          onClick={this.tryAgain}
          style={styles.button}
          color="primary"
        >
          Try Again
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
  }
}

export default UnrecognisedUsername;
