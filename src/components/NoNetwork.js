import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';

export class NoNetwork extends Component {

  tryAgain = e => {
    e.preventDefault();
    this.props.usernameInputStep();
  }

  render() {
    const { values } = this.props;
    return (
      <React.Fragment>
        <AppBar
          style={styles.appBar}
          position="static"
        >
          <Typography variant="h5">
            Server not found
          </Typography>
        </AppBar>
        <br/>
        <h1>We're having problems carrying out your request:</h1>
        <h2>Username: { values.username } </h2>
        <h2>If this username is correct, here are other things you can do:</h2>
        <div className="noNetworkList">
          <ul>
            <li>Try again later.</li>
            <li>Check your network connection.</li>
          </ul>
        </div>
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
  },
  appBar: {
    background: '#ff3399',
    padding: '12px'
  }
}

export default NoNetwork;
