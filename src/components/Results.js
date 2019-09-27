import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
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
        <AppBar
          style={styles.appBar}
          position="static"
        >
          <Typography variant="h5">
            Results
          </Typography>
        </AppBar>
        <br/>
        <List>
          <ListItem>
            <StyledListItemText
              primary={ values.numberOfRepos }
              secondary="total number of repos"
            />
          </ListItem>
          <br/>
          <ListItem>
            <StyledListItemText
              primary={ values.favouriteLanguage }
              secondary="user's favourite language"
            />
          </ListItem>
          <br/>
          <ListItem>
            <StyledListItemText
              primary={ values.frequency }
              secondary={ "number of repos where the user's favourite language appears as the main language" }
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
  },
  appBar: {
    background: '#ff3399',
    padding: '12px'
  }
}

const StyledListItemText = withStyles({
  primary: {
    fontSize: 48
  },
})(ListItemText);

export default Results;
