import * as React from 'react';
import './App.css';

class App extends React.Component {
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
        </div>
      </div>
    );
  }
}

export default App;
