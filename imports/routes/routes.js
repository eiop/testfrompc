import React from "react";
import { Meteor } from "meteor/meteor";
import { Router, Route, browserHistory } from "react-router";

import App from "/imports/ui/App";
import Login from "/imports/ui/Login";
import Signup from "/imports/ui/Signup";
import Links from "/imports/ui/Link";
import NotFound from "/imports/ui/NotFound";

const unauthenticatedPages =['/','/signup'];
const authenticatedPages =['/links'];
const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/links');
  }
}
const onEnterPrivatPage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  }
}
export const onAuthChange=(isAuthenticated)=>{
    const pathname = browserHistory.getCurrentLocation().pathname;
    const isUnAuthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);
    
    if (isUnAuthenticatedPage && isAuthenticated) {
      browserHistory.replace('/links')
    } else if (isAuthenticatedPage && !isAuthenticated) {
      browserHistory.replace('/')
    }
};
export const routes = (
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Login} onEnter={onEnterPublicPage} />
      <Route path="/signup" component={Signup} onEnter={onEnterPublicPage} />
      <Route path="/links" component={Links} onEnter={onEnterPrivatPage} />
      <Route path="*" component={NotFound} />
    </Router>
  </div>
);


