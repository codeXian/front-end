import * as React from 'react';
import './App.css';
import Immutable from './components/Immutable';

class App extends React.PureComponent {
  public state = {
    time: new Date().toLocaleTimeString(),
  };
  public componentDidMount() {
    setInterval(() => {
      this.setTimeInterval();
    }, 1000);
  }

  public setTimeInterval() {
    this.setState({ time: new Date().toLocaleTimeString() });
  }

  public render() {
    const { time } = this.state;
    return (
      <div className="App">
        <div>
          <h1>Hello World</h1>
          <h2>It is {time}</h2>
          <Immutable />
        </div>
      </div>
    );
  }
}

export default App;
