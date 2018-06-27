import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import ListingApi from '../api/listingApi';

class Listings extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!this.props.token && nextProps.token) {
      this.props.fetchListings(nextProps.token);
    }
  }

  render() {
    return (
      <div style={{flexGrow: 1}}>
        <Grid container direction={"column"}>
          <Grid item>
            <div></div>
          </Grid>

          <Grid item>
            <div style={{backgroundColor: "#f7fafe"}}>

            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.user.token
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchListings: ListingApi.fetchListings
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
