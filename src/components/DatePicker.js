import React from 'react';
import {bindActionCreators, compose} from 'redux';
import {connect} from 'react-redux';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const styles = {
  day: {display: "inline-block", position: "relative", backgroundColor: "#fff", color: "#4141df", borderRadius: "50%", border: "1px solid #4141df", height: "2.5em", lineHeight: "2.5em", width: "2.5em", textAlign: "center", fontSize: 10, cursor: "pointer"}
}

class CustomInput extends React.Component {
  render () {
    return (
      <div className="custom-input" onClick={this.props.onClick} style={styles.day}>
        {moment(this.props.value).date()}
      </div>
    )
  }
}

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: props.date
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({ date: moment(date) });

    if (this.props.updateStartDate) {
      this.props.updateStartDate(date);
    } else {
      this.props.updateEndDate(date);
    }
  }

  render() {
    return (
        <div id="datepicker-window">
          <ReactDatePicker selected={this.state.date}
                           onChange={this.handleChange}
                           minDate={this.props.minDate ? this.props.minDate : moment(new Date())}
                           maxDate={this.props.maxDate ? this.props.maxDate : moment().add(10, "years")}
                           customInput={<CustomInput />} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);
