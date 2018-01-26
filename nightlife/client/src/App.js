import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {PageRoute} from './components/PageRoute/PageRoute';
import {Nav} from './components/index'

const AppMain = (props) => (
 <div>
 <Nav/>
  <Router>
    <PageRoute/>
  </Router>
 </div>)

const mapStateToProps = state => ({
  ...state
})
const App = connect(mapStateToProps, null)(AppMain);
export default App;
