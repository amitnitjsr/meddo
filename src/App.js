import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Signin from './containers/Login/Signin';
import Home from './containers/Home/Home';
import Relogin from './components/Relogin/Relogin';
import Detail from './components/Detail/Detail';
import Navbar from './components/Navbar/Navbar';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Route exact path='/' component={Signin} />
          {!this.props.isSignedIn && (
            <Relogin />
          )}
          {this.props.isSignedIn && (
            <Navbar />
          )}
          {this.props.isSignedIn && (
            <Route path='/home' component={Home} />
          )}
          {this.props.isSignedIn && (
            <Route path='/details/:id' component={Detail} />
          )}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  null
)(App);


