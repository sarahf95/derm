import React, { Component } from 'react';

class Previous extends Component {
  render() {
    return (
      <div className="Previous" onClick={this.props.previousStep}>
        Back
      </div>
    );
  }
}

export default Previous;
