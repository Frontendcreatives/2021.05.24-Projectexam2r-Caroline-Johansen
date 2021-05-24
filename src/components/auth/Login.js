import React from 'react';
import { Col, Form, InputGroup, FormGroup, Input, Button, InputGroupAddon, InputGroupText } from "reactstrap";
import axios from 'axios';
import { withRouter } from "react-router-dom";
  
class Login extends React.Component {
    
    constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
     
      
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(e) {
    let input = this.state.input;
    input[e.target.name] = e.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit(e) {
    e.preventDefault();
  
    if(this.validate()){
        
  
        let input = {};
        input["username"] = "";
        input["password"] = "";
        this.setState({input:input});
  
        console.log('Login credentials are valid!');
        
        const loginData = {
			username: "Frontendpedia",
			password: "DTaG6jEVq$C4gEvU1AAh6Iqv" 
            
		};
        
        
		axios.post('https://www.frontendcreatives.com/wp-json/jwt-auth/v1/token', loginData)
			.then((res) => {
				console.log("Hi" + res.data.data.displayName + "welcome to the userpage for CRUD operations!");
				localStorage.setItem('token', res.data.data.token);
				localStorage.setItem('nicename', res.data.data.nicename);
				localStorage.setItem('displayname', res.data.data.displayName);
                this.props.history.push("/userpage");
			})
          
			.catch((err) => {
				console.log(err);
			});
      
 
      }
    }
  


 
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
   
      if (!input["username"]) {
        isValid = false;
        errors["username"] = "Please enter your username.";
      }
  
      if (typeof input["username"] !== "undefined") {
        //const validuser = "Frontendpedia";
        if(input["username"]!== "Frontendpedia"){
            isValid = false;
            errors["username"] = "Please enter valid username.";
        }
      }
  
      
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      
  
      if (typeof input["password"] !== "undefined") {
        if(input["password"]!== "DTaG6jEVq$C4gEvU1AAh6Iqv"){
            isValid = false;
            errors["password"] = "Please enter valid password.";
        }
      }
  
    
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }


  render() {
    return (
        
        
        
        
        <Col xs="12" md={{size:6, offset: 3}}>
      <h1>LOGIN</h1>
      
      <Form onSubmit={this.handleSubmit}>
        <InputGroup className="mb-3">
          <InputGroupAddon addonType="prepend">
            <InputGroupText>Username</InputGroupText>
          </InputGroupAddon>
            <Input 
              type="text" 
              name="username" 
              value={this.state.input.username}
              onChange={this.handleChange} 
              placeholder="Enter username" 
              id="username" autoComplete="false"/>
        </InputGroup>
        
        <InputGroup className="mb-3">
        <InputGroupAddon addonType="prepend">
            <InputGroupText>Password</InputGroupText>
          </InputGroupAddon>
           <Input 
              type="password" 
              name="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              placeholder="Enter password" 
              id="password" autoComplete="false" />
        </InputGroup>
             <div className="text-danger">{this.state.errors.username}</div>
              <div className="text-danger">{this.state.errors.password}</div>
                     
          

        <FormGroup>
        
          <Button color="warning">Login</Button>
        </FormGroup>
      </Form>
    </Col>
   
    );
  }
}
  
export default  withRouter(Login);

