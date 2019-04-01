import React, { Component } from 'react';

class Done extends Component {
  render() {
    return (
      <div className="Done" onClick={console.log('done')}>
        Done
      </div>
    );
  }
}

export default Done;
