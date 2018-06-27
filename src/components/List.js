import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import ListingApi from '../api/listingApi';
import Listing from './Listing';

class List extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (!this.props.token && nextProps.token) {
      this.props.fetchListings(nextProps.page, nextProps.token);
    }

    if (!this.props.fetched && nextProps.fetched) {
      let fetchListings = () => this.props.fetchListings(nextProps.page, nextProps.token);

      window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
          // you're at the bottom of the page
          console.log("Bottom of page");
          // fetchListings();
        }
      };
    }
  }

  render() {
    let listings = this.props.fetched ? this.props.listings.map(
      listing => <Listing key={listing.id} listing={listing} />
    ) : <div></div>;

    return (
      <div style={{flexGrow: 1}}>
        <Grid container direction={"row"} spacing={24}>
          {listings}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.user.token,
    page: state.listing.page,
    fetched: state.listing.fetched,
    listings: state.listing.listings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchListings: ListingApi.fetchListings
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
