import React from 'react';
import Grid from '@material-ui/core/Grid';

class Listing extends React.Component {
  render() {
    let listing = this.props.listing;

    return (
      <Grid item xs={12} sm={4} md={3}>
        <div style={{width: "100%", height: "100%"}}>

          <div style={{
            width: "100%",
            paddingTop: "60%",
            overflow: "hidden",
            position: "relative",
            borderRadius: 2,
            marginBottom: 10
          }}>
            <img src={listing.image}
              style={{
                borderRadius: 3,
                width: "100%",
                height: "auto",
                minHeight: "100%",
                margin: "auto",
                position: "absolute",
                top: "-100%",
                right: "-100%",
                bottom: "-100%",
                left: "-100%"
              }} />
          </div>

          <div style={{height: "40%"}}>
            <div style={{marginBottom: 10}}>
              <p style={{display: "inline-block", backgroundColor: "#4141df", color: "#fff", borderRadius: "50%", height: "2.5em", lineHeight: "2.5em", width: "2.5em", textAlign: "center", fontSize: 10}}>{listing.rating}</p>
              <p style={{display: "inline-block", color: "#4141df", marginLeft: 10, fontSize: 10}}>{listing.badge}</p>
            </div>
            <p style={{fontWeight: "bold", marginBottom: 7, fontSize: 14}}>{listing.name}</p>
            <p style={{color: "#afb5bd", fontSize: 12}}>Starting from $ {listing.cost}</p>
          </div>
        </div>
      </Grid>
    );
  }
}

export default Listing;
