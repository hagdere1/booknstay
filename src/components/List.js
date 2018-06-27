import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListingApi from '../api/listingApi';
import Listing from './Listing';

class List extends React.Component {
  constructor(props) {
    super(props);

    this.fetchListings = this.fetchListings.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.token && nextProps.token) {
      // this.props.fetchListings(nextProps.page, nextProps.token);
    }

    if (!this.props.fetched && nextProps.fetched) {
      let fetchListings = this.fetchListings;

      window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
          fetchListings();
        }
      };
    }
  }

  fetchListings() {
    if (!this.props.isLoading) {
      // this.props.fetchListings(this.props.page, this.props.token);
    }
  }

  render() {
    let listings = this.props.fetched ? this.props.listings.map(
      listing => <Listing key={listing.id} listing={listing} />
    ) : <div></div>;

    return (
      <div id="list" style={{height: "200px", backgroundColor: "#f7fafe"}}>
        <Grid container direction={"row"} spacing={24}>
          {listings}
        </Grid>

        <div style={{
          /*position: "absolute",
          top: "50%",
          left: "calc(50% - 25px)"*/
          verticalAlign: "middle",
          width: 50,
          margin: "0 auto"
        }}>
          <CircularProgress size={50} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.user.token,
    page: state.listing.page,
    fetched: state.listing.fetched,
    isLoading: state.listing.fetching,
    listings: state.listing.listings
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchListings: ListingApi.fetchListings
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
