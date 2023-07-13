import "./App.css";
import HomeLayout from "./Layout/HomeLandingPageComponent/HomeLayout";
// import HomeLayout from './components/Layout/HomeLandingPageComponent/HomeLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React from "react";
import LoginFormLayout from "./Layout/LoginFormPageComponent/LoginFormLayout";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeLayout />
          </Route>
          <Route path="/signIn">
            <LoginFormLayout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
