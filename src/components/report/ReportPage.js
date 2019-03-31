import React, { Component } from 'react';
import ReportPageItem from './ReportItem';

class ReportPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: this.props.pageTitle,
      items: this.props.items
    };
  }

  render() {
    console.log('this.state', this.state);
    return (
      <div className="ReportPage">
        <h2>{this.state.pageTitle}</h2>

        {this.state.items.map((item, index) => {
          return <ReportPageItem name={item.name} src={item.src} />;
        })}
      </div>
    );
  }
}

export default ReportPage;
