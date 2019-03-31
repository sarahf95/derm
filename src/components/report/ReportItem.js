import React, { Component } from 'react';

class ReportPageItem extends Component {
  super(props) {
    this.props = props;
  }

  render() {
    return (
      <div className="ReportItem">
        <image src={this.props.src} />
        {this.props.name}
      </div>
    );
  }
}

export default ReportPageItem;
