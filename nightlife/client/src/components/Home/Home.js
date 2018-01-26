
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {submitAccountRequest} from '../../assets/action';


const Ab = (props) => (
  <div className="about-main">
    jhkgkj
  </div>
)

const mapStateToProps = state => ({ ...state.account })

const mapDispatchToProps = dispatch => ({
  lol : (userName,password,actionType) => submitAccountRequest(userName,password,actionType)
})

const About = connect(mapStateToProps,mapDispatchToProps)(Ab);
export default About;
