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
    if (!this.props.isLoading) {
      this.props.fetchListings(this.props.page, this.props.token);
    }
  }

  render() {
    let resultsInfo = <div></div>,
        listingGrid = <div></div>,
        listings = <div></div>;

    if (this.props.fetched) {
      resultsInfo = (
        <Grid id="results-info" item xs={12} style={{padding: "30px 45px 20px 45px", position: "relative"}}>
          <p style={{color: "#9EA5AD", marginBottom: 8, fontSize: 12}}>Over 8,000 booking reviews in Dubai, with an average rating of 8.</p>
          <p style={{fontWeight: "bold", fontSize: 18, marginBottom: 20}}>89 places found</p>
          <div style={{display: "inline-block", color: "#4141df", fontSize: 12}}>
            <span className="tag" style={{marginRight: 12, border: "1px solid #b3b2f2", borderRadius: 15, padding: "8px 10px", cursor: "pointer"}}>Great Deals</span>
            <span className="tag" style={{marginRight: 12, border: "1px solid #b3b2f2", borderRadius: 15, padding: "8px 10px", cursor: "pointer"}}>Near to Metro</span>
            <span className="tag" style={{border: "1px solid #b3b2f2", borderRadius: 15, padding: "8px 10px", cursor: "pointer"}}>5 + Rating</span>
          </div>
          <p className="link" style={{display: "inline-block", float: "right", fontSize: 12, cursor: "pointer", position: "absolute", left: "50%"}}>Remove All Filters</p>
        </Grid>
      );

      listings = this.props.listings.map(
        listing => <Listing key={listing.id} listing={listing} />
      );

      listingGrid = (
        <Grid container direction={"row"} spacing={24} style={{margin: 0, paddingLeft: 18, paddingRight: 18}}>
          {listings}
        </Grid>
      );
    }

    return (
      <Grid container direction={"row"} justify={"center"} alignItems={"center"} style={{backgroundColor: "#f7fafe"}}>
        {resultsInfo}

        {listingGrid}

        <Grid item xs={12}>
          <div className="spinner" style={{
            display: this.props.isLoading ? "block" : "none",
            width: 50,
            margin: "auto",
            padding: "15px 0 25px 0"
          }}>
            <CircularProgress size={50} />
          </div>
        </Grid>
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
