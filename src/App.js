import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './pages/homeScreen';
import AfterLogin from './pages/afterLogin'
import { Switch } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/loggedIn">
            <AfterLogin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
