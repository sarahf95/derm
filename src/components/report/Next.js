import React, { Component } from 'react';

class Next extends Component {
  render() {
    return (
      <div className="Next" onClick={this.props.nextStep}>
        Next
      </div>
    );
  }
}

export default Next;
