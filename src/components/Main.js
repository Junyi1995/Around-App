import React from 'react';
import { Register } from './Register';
import { Login } from './Login';
import {Home} from './Home'
import { Switch, Route, Redirect } from 'react-router-dom';


export class Main extends React.Component {
    getLogin = () => {
        return this.props.isLoggedIn? <Home/>: <Login handleLogin={this.props.handleLogin}/>
    }
    render(){
        return (
            <div className="main">
                <Switch>
                    <Route exact path="/" render = {this.getLogin}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/login" render = {this.getLogin}/>
                    <Route render={this.getLogin}/>
                </Switch>
            </div>
        );
    }
}
