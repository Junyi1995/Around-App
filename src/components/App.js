import React, { Component } from 'react';
import {Header} from './Header';
import {Main} from './Main';
import '../styles/App.css';
import {TOKEN_KEY} from "../constants"

class App extends Component {
    state = {
        isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY));
    }
    handleLogin = (token) =>{ // all successful
        localStorage.setItem(TOKEN_KEY, token);
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
