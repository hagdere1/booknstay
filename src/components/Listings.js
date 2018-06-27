import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import ListingApi from '../api/listingApi';

class Listings extends React.Component {
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
          fetchListings();
        }
      };
    }
  }

  render() {
    let listings = this.props.fetched ? this.props.listings.map(listing => {
      return (
        <Grid direction={"row"} item xs={12} sm={4} md={3}>
          <div style={{width: "100%", height: "100%"}}>
            <img src={listing.image} />
            <p>{listing.rating}</p>
            <p>{listing.badge}</p>
            <p>{listing.name}</p>
            <p>{listing.cost}</p>
          </div>
        </Grid>
      )
    }) : <div></div>;

    return (
      <div style={{flexGrow: 1}}>
        <Grid container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
