import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';





/**
 * React component for Profile page
 */
class Profile extends Component {
  // constructor() {
    // TODO: set state based on props, drop down values for learningTargets, locations, form event handlers
  // }
  handleSubmit(e) {
    // TODO: EXTRA WORK - handle form submit (if doing updates)
    
  }
  handleChange(type, value) {
    // TODO: EXTRA WORK - handle form change to set state (if doing updates)
  }
  render() {
    // TODO: use to redirect to home page if user not logged in
    if (this.props.user == null) {
      return (
        <Redirect to={{
          pathname: '/login',
        }} />
      )
    }
    return (
      // <Container className="mt-5">
      
      // <h1> {this.props.user && this.props.user.firstName}</h1>
      // </Container>    
       <Container className="mt-3">
       <h1 class="display-4 text-secondary">Profile</h1>  <br></br> <br></br>
       <Form onSubmit={this.handleSubmit}>
   <Form.Group controlId="formBasicEmail">
     <Form.Label> First Name</Form.Label>
     <Form.Control onChange = {this.handleChange} type="email" disabled value= {this.props.user && this.props.user.firstName}/>
   </Form.Group>

   <Form.Group controlId="formBasicEmail">
     <Form.Label>Last Name</Form.Label>
     <Form.Control onChange = {this.handleChange} type="email" disabled value= {this.props.user && this.props.user.lastName}/>
   </Form.Group>
 
   <Form.Group controlId="formBasicPassword">
     <Form.Label>Email</Form.Label>
     <Form.Control onChange = {this.handleChange}type="email" disabled value= {this.props.user && this.props.user.email} />
   </Form.Group>

   <Form.Group controlId="formBasicEmail">
     <Form.Label>Learning Targets</Form.Label>
     <Form.Control onChange = {this.handleChange} type="email" disabled value= {this.props.user && this.props.user.learningTargets}/>
   </Form.Group>

   <Form.Group controlId="formBasicEmail">
     <Form.Label>Location</Form.Label>
     <Form.Control onChange = {this.handleChange} type="email" disabled value= {this.props.user && this.props.user.location}/>
   </Form.Group>
 

  
 </Form>
 
        
 
         
       </Container>  
    )
  }
}

Profile.propTypes = {
  updateUser: PropTypes.func,
  user: PropTypes.object,
  userError: PropTypes.string,
}

export default Profile;
