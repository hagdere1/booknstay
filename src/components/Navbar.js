import React from 'react';
import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import DatePicker from './DatePicker';

const styles = {
  container: {backgroundColor: "#fff", padding: "15px 30px"},
  logo: {color: "#4141df", display: "inline-block"},
  filterSection: {display: "inline-block", verticalAlign: "top", paddingLeft: 15, paddingRight: 15, marginLeft: 15, marginRight: 20, borderRight: "1px solid #eee", borderLeft: "1px solid #eee"},
  searchfield: {display: "inline-block", verticalAlign: "top", marginRight: 30},
  searchIcon: {verticalAlign: "top", marginTop: 4, marginRight: 15},
  textfieldWrapper: {display: "inline-block", verticalAlign: "top", width: 325, fontWeight: "bold", fontSize: "12px !important"},
  datepickerWrap: {display: "inline-block", fontSize: 12, verticalAlign: "top", marginTop: 2},
  month: {marginRight: 10, fontWeight: "bold"},
  day: {display: "inline-block", position: "relative", backgroundColor: "#fff", color: "#4141df", borderRadius: "50%", border: "1px solid #4141df", height: "2.5em", lineHeight: "2.5em", width: "2.5em", textAlign: "center", fontSize: 10, cursor: "pointer"},
  servicesMenu: {display: "inline-block", fontSize: 12, fontWeight: "bold", float: "right"},
  serviceMenuItem: {display: "inline-block", verticalAlign: "top", marginRight: 30, marginTop: 8, cursor: "pointer"},
  dropdownIcon: {verticalAlign: "middle", marginLeft: 5}
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "Downtown Dubai, United Arab Emirates",
      startDate: moment(new Date()),
      endDate: moment(new Date()).add(1, "day")
    }

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleEndDateChange = this.handleEndDateChange.bind(this);
  }

  handleTextChange(e) {
    this.setState({ searchQuery: e.target.value })
  }

  handleStartDateChange(date) {
    this.setState({ startDate: date });
  }

  handleEndDateChange(date) {
    this.setState({ endDate: date });
  }

  render() {
    return (
      <div style={styles.container}>
        <h1 id="header-logo" style={styles.logo}>booknstay</h1>

        <div id="header-filter-section" style={styles.filterSection}>
          <div id="searchfield" style={styles.searchfield}>
            <img src="/search_24px.svg" style={styles.searchIcon} />
            <div id="textfield-wrapper" style={styles.textfieldWrapper}>
              <TextField InputProps={{inputProps: {fontSize: "14px !important"}}} value={this.state.searchQuery} onChange={this.handleTextChange} fullWidth={true} />
            </div>
          </div>
          <div id="datepicker-wrap" style={styles.datepickerWrap}>
            <span style={styles.month}>{this.state.startDate.format("MMM")}</span>
            <div className="datepicker" style={{marginRight: 10, display: "inline-block"}}>
              <DatePicker date={this.state.startDate}
                          minDate={null}
                          maxDate={this.state.endDate}
                          updateStartDate={this.handleStartDateChange}
                          updateEndDate={null} />
            </div>
            {this.state.startDate.month() === this.state.endDate.month() ? <span></span> : <span style={styles.month}>{this.state.endDate.format("MMM")}</span>}
            <div className="datepicker" style={{display: "inline-block"}}>
              <DatePicker date={this.state.endDate}
                          minDate={this.state.startDate}
                          maxDate={null}
                          updateStartDate={null}
                          updateEndDate={this.handleEndDateChange} />
            </div>
          </div>
        </div>

        <div id="header-services-menu" style={styles.servicesMenu}>
          <div className="service" style={styles.serviceMenuItem}>
            Accomodation
            <img src="/down_arrow_blue.svg" width="9" height="9" style={styles.dropdownIcon} />
          </div>
          <div className="service" style={styles.serviceMenuItem}>
            Restaurants
            <img src="/down_arrow_blue.svg" width="9" height="9" style={styles.dropdownIcon} />
          </div>
          <div className="service" style={styles.serviceMenuItem}>Rental Cars</div>
          <div style={Object.assign({}, styles.serviceMenuItem, {marginRight: 0})}>Flights</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
