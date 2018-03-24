import React, { Component } from 'react';
import {Header} from './Header';
import {Main} from './Main';
import '../styles/App.css';

class App extends Component {
    state = {
        isLoggedIn: false,
    }
    handleLogin = (token) =>{ // all successful
        this.setState({isLoggedIn: true });
    }
  render() {
    return (
      <div className="App">
        <Header/>
        <Main isLoggedIn = {this.state.isLoggedIn} handleLogin = {this.handleLogin}/>
      </div>
    );
  }
}

export default App;
