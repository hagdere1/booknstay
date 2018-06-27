import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Header from './Header';
import Listings from './Listings';
import UserApi from '../api/userApi';

class Container extends React.Component {
  componentDidMount() {
    this.props.fetchAuthToken();
  }

  render() {
    return (
      <div style={{flexGrow: 1}}>
        <Grid container direction={"column"}>
          <Grid item>
            <Header />
          </Grid>

          <Grid item>
            <Listings />
            <div style={{backgroundColor: "#f7fafe"}}>

            </div>
          </Grid>
        </Grid>
      </div>
    );
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
