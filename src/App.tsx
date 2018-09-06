import * as React from 'react';
import './App.css';

import DogPic from './DogPic';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">A random picture of a dog</h1>
        </header>
        <DogPic />
      </div>
    );
  }
}

export default App;
