import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

export class FormGithubUsername extends Component {
  state = {
    snackbaropen: false,
    snackbarmsg: "Please enter a username"
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  snackbarClose = e => {
    this.setState({
      snackbaropen: false
    });
  }

  render() {
    const { values, handleChange, getGithubData } = this.props;
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
        <br/>
        <TextField
          label="Input Github username"
          placeholder="e.g., peterjones"
          margin="normal"
          style={styles.textField}
          onChange={handleChange('username')}
          defaultValue={values.username}
        />
        <Snackbar
          anchorOrigin={{vertical: "top", horizontal: "center"}}
          open={this.state.snackbaropen}
          autoHideDuration={6000}
          onClose={this.snackbarClose}
          message={<span>{this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={this.snackbarClose}
            >
            x
            </IconButton>
          ]}
        />
        <br/>
        <Button
          variant="contained"
          onClick={this.back}
          style={styles.backButton}
        >
          Back
        </Button>
        <Button
          variant="contained"
          style={styles.button}
          onClick={() => {
            if (values.username !== "") {
              getGithubData();
            } else {
              this.setState({ snackbaropen: true })
            }
          }}
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
  backButton: {
    margin: 15,
    width: 150
  },
  textField: {
    marginLeft: 15,
    marginRight: 15,
    width: 250
  },
  appBar: {
    background: '#ff3399',
    padding: '12px'
  }
}

export default FormGithubUsername;
