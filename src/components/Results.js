import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class Results extends Component {

  checkAnother = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values } = this.props;
    return (
      <React.Fragment>
        <AppBar style={{ background: '#ff3399', padding: '12px' }} position="static">
          <Typography variant="h5">
            Results
          </Typography>
        </AppBar>
        <br/>
        <List>
          <ListItem style={{ textAlign: "center"}}>
            <ListItemText
              primary="Number of repos:"
              secondary={ values.numberOfRepos }
            />
          </ListItem>
          <br/>
          <ListItem style={{  textAlign: "center"}}>
            <ListItemText
              primary="Favourite language:"
              secondary={ values.favouriteLanguage }
            />
          </ListItem>
          <br/>
          <ListItem style={{  textAlign: "center"}}>
            <ListItemText
              primary={ "Used as the main language in " + values.frequency + " repos" }
            />
          </ListItem>
        </List>
        <br/>
        <Button
          variant="contained"
          onClick={this.checkAnother}
          style={styles.button}
        >
          Check another
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
    width: 200
  },
  textField: {
    marginLeft: 15,
    marginRight: 15,
    width: 250
  }
}

export default Results;
