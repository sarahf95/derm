import React, { Component } from 'react';
import ReportPageItem from './ReportItem';

class ReportPage extends Component {
  constructor(props) {
    super(props);
    this.renderReportPage = this.renderReportPage.bind(this);
  }

  renderReportPage(pageTitle, items) {
    return (
      <div className="ReportPage">
        <h2>{pageTitle}</h2>
        {items.map((item, index) => {
          return <ReportPageItem name={item.name} src={item.src} />;
        })}
      </div>
    );
  }

  render() {
    console.log('pageData', this.props.pageData);
    return (
      <div>
        {this.props.pageData.length > 1 ? (
          <div>
            {this.props.pageData.map(element => {
              return this.renderReportPage(element.pageTitle, element.items);
            })}
          </div>
        ) : (
          this.renderReportPage(
            this.props.pageData.pageTitle,
            this.props.pageData.items
          )
        )}
      </div>
    );
  }
}

export default ReportPage;
