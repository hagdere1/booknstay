import React from 'react';
import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import moment from 'moment-timezone';
import Banner from './Banner';
import Navbar from './Navbar';

const styles = theme => ({
	input: {
		fontSize: 14
	}
});

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "Downtown Dubai, United Arab Emirates"
    }

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({ searchQuery: e.target.value })
  }

  render() {
    return (
      <AppBar position="static" color="default" style={{boxShadow: "none", borderBottom: "1px solid #b3b2f2"}}>
        <Banner />
        <Navbar />
      </AppBar>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
