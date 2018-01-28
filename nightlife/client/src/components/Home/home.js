import React from 'react';
import { withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {Button,Grid} from 'semantic-ui-react';
import './home.css';

const Home = (props) => (
  <div className="home-root">
    <h3 > Are you ready to rock </h3>
    <h2>Search for bars & clubs near you.</h2>
    <Button primary
      content='Search Now' as={Link} to='/search'
      onClick={this.handleClick}
    />
  </div>
)

export default Home
