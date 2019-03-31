import React, { Component } from 'react';
import './Report.css';
import ReportPage from './report/ReportPage';
import data from './report/ReportData';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  nextStep() {
    this.setState(prevState => {
      return { step: prevState.step + 1 };
    });
  }

  previousStep() {
    this.setState(prevState => {
      return { step: prevState.step - 1 };
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

    let pageData = data.pages[this.state.step];

    return (
      <div className="Report">
        <h1>
          Today, <span className="Date">{dateString}</span> :
        </h1>
        <ReportPage pageTitle={pageData.pageTitle} items={pageData.items} />
      </div>
    );
  }
}

export default Report;
