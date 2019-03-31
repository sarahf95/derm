import React, { Component } from 'react';
import './App.css';
import PageContainer from './components/PageContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PageContainer />
        </header>
      </div>
    );
  }
}

export default App;
