import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export class FormGithubUsername extends Component {

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange, setRepos } = this.props;
    return (
      <React.Fragment>
        <AppBar style={{ background: '#ff3399', padding: '12px' }} position="static">
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
        <br/>
        <Button
          variant="contained"
          onClick={this.back}
          style={styles.button}
        >
          Back
        </Button>
        <Button
          variant="contained"
          style={styles.button}
          onClick={() => { setRepos(); }}
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
  textField: {
    marginLeft: 15,
    marginRight: 15,
    width: 250
  }
}

export default FormGithubUsername;
