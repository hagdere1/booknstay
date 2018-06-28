import React from 'react';
import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
	input: {
		fontSize: 14
	}
});

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "Downtown Dubai, United Arab Emirates"
    }

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({ searchQuery: e.target.value })
  }

  render() {
    return (
      <AppBar position="static" color="default" style={{boxShadow: "none", borderBottom: "1px solid #b3b2f2"}}>
        <div style={{backgroundColor: "#4141df", color: "#fff", fontSize: 12, padding: "15px 30px"}}>
          <div id="appbar-top-left">
            Contact us directly at +971 (55) 895 8452 (Local Time 22:19)
          </div>
          <div id="appbar-top-right">
            <span style={{cursor: "pointer", marginRight: 20}}>Join Now</span>
            <span style={{cursor: "pointer", marginRight: 20}}>Guest Sign In</span>
            <span className="dropdown-button" style={{cursor: "pointer", marginRight: 15, border: "1px solid #fff", borderRadius: 15, padding: "5px 10px"}}>ENG </span>
            <span className="dropdown-button" style={{cursor: "pointer", border: "1px solid #fff", borderRadius: 15, padding: "5px 10px"}}>USD </span>
          </div>
        </div>

        <div style={{backgroundColor: "#fff", padding: "15px 30px"}}>
          <h1 style={{color: "#4141df", display: "inline-block"}}>booknstay</h1>

          <div style={{display: "inline-block", verticalAlign: "top", paddingLeft: 15, paddingRight: 15, marginLeft: 15, marginRight: 15, borderRight: "1px solid #eee", borderLeft: "1px solid #eee"}}>
            <div id="searchfield" style={{display: "inline-block", verticalAlign: "top", marginRight: 30}}>
              <img src="/search_24px.svg" style={{verticalAlign: "top", marginTop: 4, marginRight: 15}} />
              <div style={{display: "inline-block", verticalAlign: "top", width: 325, fontWeight: "bold"}}>
                <TextField inputProps={{classes: {input: styles.input} }} value={this.state.searchQuery} onChange={this.handleTextChange} fullWidth={true} />
              </div>
            </div>
            <div style={{display: "inline-block", fontSize: 12, verticalAlign: "top", marginTop: 3}}>
              <span style={{marginRight: 10, fontWeight: "bold"}}>April</span>
              <p className="datepicker" style={{display: "inline-block", backgroundColor: "#fff", color: "#4141df", borderRadius: "50%", border: "1px solid #4141df", height: "2.5em", lineHeight: "2.5em", width: "2.5em", textAlign: "center", fontSize: 10, cursor: "pointer", marginRight: 5}}>29</p>
              <p className="datepicker" style={{display: "inline-block", backgroundColor: "#fff", color: "#4141df", borderRadius: "50%", border: "1px solid #4141df", height: "2.5em", lineHeight: "2.5em", width: "2.5em", textAlign: "center", fontSize: 10, cursor: "pointer"}}>30</p>
            </div>
          </div>

          <div style={{display: "inline-block", fontSize: 12, fontWeight: "bold", verticalAlign: "top", marginTop: 8, float: "right"}}>
            <div style={{display: "inline-block", marginRight: 30, cursor: "pointer"}}>Accomodation</div>
            <div style={{display: "inline-block", marginRight: 30, cursor: "pointer"}}>Restaurants</div>
            <div style={{display: "inline-block", marginRight: 30, cursor: "pointer"}}>Rental Cars</div>
            <div style={{display: "inline-block", cursor: "pointer"}}>Flights</div>
          </div>
        </div>
      </AppBar>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
