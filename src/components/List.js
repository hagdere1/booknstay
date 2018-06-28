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
      this.props.fetchListings(nextProps.page, nextProps.token);
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
    if (!this.props.isLoading && this.props.page < 1) {
      this.props.fetchListings(this.props.page, this.props.token);
    }
  }

  render() {
    let listings = <div></div>,
        listingGrid = <div></div>,
        resultsInfo = <div></div>;

    if (this.props.fetched) {
      listings = this.props.listings.map(
        listing => <Listing key={listing.id} listing={listing} />
      );

      listingGrid = (
        <Grid container direction={"row"} spacing={24} style={{margin: 0}}>
          {listings}
        </Grid>
      );

      resultsInfo = (
        <Grid item xs={12} style={{margin: 30, marginBottom: 25}}>
          <p style={{color: "#9EA5AD", marginBottom: 8, fontSize: 12}}>Over 8,000 bookin reviews in Dubai, with an average rating of 8.</p>
          <p style={{fontWeight: "bold", fontSize: 16, marginBottom: 20}}>89 places found</p>
          <div style={{display: "inline-block", color: "#4141df", fontSize: 12}}>
            <span style={{marginRight: 15, border: "1px solid #b3b2f2", borderRadius: 15, padding: "5px 10px"}}>Great Deals</span>
            <span style={{marginRight: 15, border: "1px solid #b3b2f2", borderRadius: 15, padding: "5px 10px"}}>Near to Metro</span>
            <span style={{border: "1px solid #b3b2f2", borderRadius: 15, padding: "5px 10px"}}>5 + Rating</span>
          </div>
          <p style={{display: "inline-block", color: "#807FBF", float: "right", fontSize: 12}}>Remove All Filters</p>
        </Grid>
      );
    }



    return (
      <Grid container justify={"center"} alignItems={"center"}>
      {/*<div id="list" style={{
          flex: "1 1 auto",
          backgroundColor: "#f7fafe",
          justify
        }}>*/}
        {resultsInfo}

        {listingGrid}

        <Grid item xs={12}>
          <div className="spinner" style={{
            /*display: this.props.isLoading ? "block" : "none",*/
            width: 50,
            margin: "auto",
            padding: "15px 0"
          }}>
            <CircularProgress size={50} />
          </div>
        </Grid>
      {/*</div>*/}
      </Grid>
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
