import React from 'react';
import { Meteor } from "meteor/meteor";
import { Link } from 'react-router';

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      error: ''
    };
  }
  onSubmit(e){
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Meteor.loginWithPassword({email},password,(err)=>{
      if (err) {
        this.setState({error:err.reason})
      }else{
        this.setState({error:''})
      }
    })
  }

  render(){
    return (
      <div>
        <h1>login to Short lnk</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined }
        <form onSubmit={this.onSubmit.bind(this)} noValidate >
          <input type='email' ref='email' name='email' placeholder='email'  />
          <input type='password' ref='password' name='password' placeholder='password'  />
          <button>login</button>
        </form>

        <Link to="/signup" >create an account</Link>
      </div>
    )
  }
}


