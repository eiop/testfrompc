import React from "react";
import { browserHistory } from "react-router";
import { Link } from "react-router";
import {Accounts} from 'meteor/accounts-base';
import { Links } from "/imports/api/links";
import LinksList from "/imports/ui/LinksList";



export default class LinkWeb extends React.Component {
  onLogout(){
    Accounts.logout();
  }
  onSubmit(e) {
    const url = this.refs.url.value.trim();

    e.preventDefault();

    if (url) {
      Links.insert({ url, userId: Meteor.userId() });
      this.refs.url.value = '';
    }
  }
  render() {
    return (
      <div>
        <p>your links</p>
        <button onClick={this.onLogout.bind(this)}>Logout</button>
        {/* <Link to="/">signout</Link> */}
        <LinksList></LinksList>
        <form onSubmit={this.onSubmit.bind(this)}>
            <input type="text" ref="url" placeholder="URL"/>
            <button>Add Link</button>
        </form>
      </div>
    );
  }
}
