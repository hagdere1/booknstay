import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';

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
        <div style={{backgroundColor: "#4141df", color: "#fff", fontSize: 12, padding: "15px 20px"}}>
          <div id="appbar-top-left">
            Contact us directly at +971 (55) 895 8452 (Local Time 22:19)
          </div>
          <div id="appbar-top-right">
            <span style={{marginRight: 20}}>Join Now</span>
            <span style={{marginRight: 20}}>Guest Sign In</span>
            <span style={{marginRight: 15, border: "1px solid #fff", borderRadius: 15, padding: "5px 10px"}}>ENG </span>
            <span style={{border: "1px solid #fff", borderRadius: 15, padding: "5px 10px"}}>USD </span>
          </div>
        </div>

        <div style={{backgroundColor: "#fff", padding: "15px 20px"}}>
          <h1 style={{color: "#4141df", display: "inline-block"}}>booknstay</h1>
          <div style={{display: "inline-block", verticalAlign: "top", paddingLeft: 15, paddingRight: 15, marginLeft: 15, borderRight: "1px solid #eee", borderLeft: "1px solid #eee"}}>
            <div id="searchfield" style={{display: "inline-block", verticalAlign: "top"}}>
              <img src="/search_24px.svg" style={{verticalAlign: "top", marginTop: 4, marginRight: 15}} />
              <div style={{display: "inline-block", verticalAlign: "top", width: 325, fontWeight: "bold"}}>
                <TextField value={this.state.searchQuery} onChange={this.handleTextChange} fullWidth={true} />
              </div>
            </div>
            <div style={{display: "inline-block"}}>

            </div>
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
