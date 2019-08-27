import React, {Component} from 'react';
import Calendar from 'react-calendar'
import "./css/dateSelector.css";

class DateSelector extends Component {

  render(){
  return (
    <div onKeyDown={this.handleClick} onclick={this.handleClick} className="calendars">
        <h4>From Date:</h4>
        <Calendar className="fromDate"></Calendar>
        <h4>To Date:</h4>
        <Calendar className="toDate"></Calendar>
    </div>
  );
}
}

export default DateSelector;