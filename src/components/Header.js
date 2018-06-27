import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';

class Header extends React.Component {
  render() {
    return (
      <AppBar position="static" color="default" style={{boxShadow: "none", borderBottom: "1px solid #4141df"}}>
        <div style={{backgroundColor: "#4141df", color: "#fff"}}>
          <div style={{display: "inline-block"}}>
            Contact us directly at +971 (55) 895 8452 (Local Time 22:19)
          </div>
          <div style={{display: "inline-block"}}>
            <div>Join Now</div>
            <div>Guest Sign In</div>
            <div>ENG</div>
            <div>USD</div>
          </div>
        </div>

        <div style={{backgroundColor: "#fff"}}>
          <h1 style={{color: "#4141df", display: "inline-block", borderRight: "1px solid #eee"}}>booknstay</h1>
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
