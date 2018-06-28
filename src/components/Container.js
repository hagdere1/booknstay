import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import List from './List';
import UserApi from '../api/userApi';

class Container extends React.Component {
  componentDidMount() {
    this.props.fetchAuthToken();
  }

  render() {
    return (
      <div style={{height: "100%", backgroundColor: "#f7fafe"}}>
        <Grid container direction={"row"} style={{height: "100%"}}>
          <Grid item xs={12}>
            <Header />
          </Grid>

          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </div>
    );

    // return (
    //   <div style={{height: "100%", display: "flex", flexFlow: "column"}}>
    //     <Header />
    //     <List />
    //   </div>
    // );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchAuthToken: UserApi.fetchAuthToken
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
