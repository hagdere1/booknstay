import React from 'react';
import Grid from '@material-ui/core/Grid';

class Listing extends React.Component {
  render() {
    let listing = this.props.listing;

    return (
      <Grid item xs={12} sm={4} md={3}>
        <div style={{border: "4px solid black", width: "100%", height: "100%"}}>
          <img src={listing.image} style={{borderRadius: 2}} width={"100%"} height={"60%"} />
          <div style={{height: "40%"}}>
            <div>
              <p style={{display: "inline-block", backgroundColor: "#4141df", color: "#fff", borderRadius: "50%", height: "2em", lineHeight: "2em", width: "2em", textAlign: "center"}}>{listing.rating}</p>
              <p style={{display: "inline-block", color: "#4141df", marginLeft: 10}}>{listing.badge}</p>
            </div>
            <p style={{fontWeight: "bold"}}>{listing.name}</p>
            <p style={{color: "#afb5bd"}}>Starting from $ {listing.cost}</p>
          </div>
        </div>
      </Grid>
    );
  }
}

export default Listing;
