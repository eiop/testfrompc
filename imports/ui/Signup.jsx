import React from 'react';
import { Link } from 'react-router';
import {Accounts} from 'meteor/accounts-base';

export default class Signup extends React.Component{
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

    if(password.length < 9){
      return this.setState({error:'passeord must be more than 8 chracter long'})
    }
    Accounts.createUser({email,password},(err) =>{
      if (err) {
        this.setState({error:err.reason})
      }else{
        this.setState({error:''})
      } 
    })

    // this.setState({
    //   error: 'Something went wrong'
    // })
  }

  render(){
    return (
      <div>
        <h1>Signup to Short lnk</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined }
        <form onSubmit={this.onSubmit.bind(this)} noValidate >
          <input type='email' ref='email' name='email' placeholder='email'  />
          <input type='password' ref='password' name='password' placeholder='password'  />
          <button>create account</button>
        </form>


        <Link to="/" >Have an account</Link>
      </div>
    )
  }
}

