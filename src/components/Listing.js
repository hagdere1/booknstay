import React from 'react';
import Grid from '@material-ui/core/Grid';

const styles = {
  container: {width: "100%", height: "100%"},
  imageWrapper: {width: "100%", paddingTop: "60%", overflow: "hidden", position: "relative", borderRadius: 2, marginBottom: 10},
  image: {borderRadius: 3, width: "100%", height: "auto", minHeight: "100%", margin: "auto", position: "absolute", top: "-100%", right: "-100%", bottom: "-100%", left: "-100%"},
  rating: {display: "inline-block", backgroundColor: "#4141df", color: "#fff", borderRadius: "50%", height: "2.5em", lineHeight: "2.5em", width: "2.5em", textAlign: "center", fontSize: 10},
  badge: {display: "inline-block", color: "#4141df", marginLeft: 10, fontSize: 10},
  name: {fontWeight: "bold", marginBottom: 7, fontSize: 14},
  cost: {color: "#afb5bd", fontSize: 12}
}

class Listing extends React.Component {
  render() {
    let listing = this.props.listing;

    return (
      <Grid item xs={12} sm={4} md={3}>
        <div style={styles.container}>

          <div style={styles.imageWrapper}>
            <img src={listing.image}
              style={styles.image} />
          </div>

          <div style={{height: "40%"}}>
            <div style={{marginBottom: 10}}>
              <p style={styles.rating}>{listing.rating}</p>
              <p style={styles.badge}>{listing.badge}</p>
            </div>
            <p style={styles.name}>{listing.name}</p>
            <p style={styles.cost}>Starting from $ {listing.cost}</p>
          </div>
        </div>
      </Grid>
    );
  }
}

export default Listing;
