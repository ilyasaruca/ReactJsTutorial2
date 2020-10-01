import React from 'react';
import ReactDOM from 'react-dom'; 
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//import pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Link from './pages/Link';
import Settings from './pages/Settings';


if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then(function(registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function(err) {
      console.log("Service worker registration failed, error:", err);
    });
}


const routerObj=
<Router>
  <Route exact path="/" component={Login}></Route>
  <Route path="/dashboard" component={Dashboard}></Route>
  <Route path="/link" component={Link}></Route>
  <Route path="/settings" component={Settings}></Route>
</Router>

ReactDOM.render(routerObj,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
