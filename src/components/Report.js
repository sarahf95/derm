import React, { Component } from 'react';
import './Report.css';
import ReportPage from './report/ReportPage';
import data from './report/ReportData';
import Next from './report/Next';
import Previous from './report/Previous';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      pageData: data.pages[0]
    };
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    console.log('state', this.state);
  }

  nextStep() {
    this.setState(prevState => {
      return {
        step: prevState.step + 1,
        pageData: data.pages[prevState.step + 1]
      };
    });
  }

  previousStep() {
    this.setState(prevState => {
      return {
        step: prevState.step - 1,
        pageData: data.pages[prevState.step - 1]
      };
    });
  }

  render() {
    let date = new Date();
    let months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ];
    let month = date.getMonth();
    let day = date.getDate();
    let dateString = months[month] + ' ' + day;

    return (
      <div className="Report">
        <h1>
          Today, <span className="Date">{dateString}</span> :
        </h1>
        <ReportPage pageData={this.state.pageData} />
        {this.state.step > 0 ? (
          <Previous previousStep={this.previousStep} />
        ) : null}
        <Next nextStep={this.nextStep} />
      </div>
    );
  }
}

export default Report;
