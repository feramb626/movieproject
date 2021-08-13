import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Pages/home';
import Loginpage from './Pages/login';
import Signuppage from './Pages/Signup';
import Moviepage from './Pages/Movies';


export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/signup">
            {/* <Test />   */}
            <Signuppage />
        </Route>
        <Route path="/login">
            <Loginpage />
          </Route>
          <Route path="/home">
            <About />
          </Route>
          <Route path="/movie">
            <Moviepage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      {/* </div> */}
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Test() {
  return <h2>Test</h2>;
}


