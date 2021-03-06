import React from 'react';
import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import moment from 'moment-timezone';

const styles ={
  container: {backgroundColor: "#4141df", color: "#fff", fontSize: 12, padding: "10px 30px"},
  contact: {verticalAlign: "top", marginTop: 6},
  button: {cursor: "pointer", marginRight: 20},
  dropdown: {display: "inline-block", cursor: "pointer", border: "1px solid #fff", borderRadius: 15, padding: "5px 10px"},
  icon: {verticalAlign: "bottom", marginLeft: 10}
}

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div style={styles.container}>
        <div id="appbar-top-left" style={styles.contact}>
          Contact us directly at +971 (55) 895 8452 (Local Time {moment().tz("Asia/Dubai").format("H:mm")})
        </div>
        <div id="appbar-top-right">
          <span style={styles.button}>Join Now</span>
          <span style={styles.button}>Guest Sign In</span>
          <div id="#display-options" style={{display: "inline-block"}}>
            <div className="dropdown-button" style={Object.assign({}, styles.dropdown, {marginRight: 15})}>
              ENG
              <img src="/down_arrow_white.svg" width="14" height="14" style={styles.icon} />
            </div>
            <div className="dropdown-button" style={styles.dropdown}>
              USD
              <img src="/down_arrow_white.svg" width="14" height="14" style={styles.icon} />
            </div>
          </div>
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
