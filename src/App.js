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
import SignUpPageLayout from "./Layout/SignUpFormPageComponent/SignUpPageLayout";
import CheckOutFormLayout from "./Layout/CheckOutFormLayout/CheckOutFormLayout";
import PersonalLayout from "./Layout/PersonalLayoutComponent/PersonalLayout";

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
          <Route path="/signUp">
            <SignUpPageLayout />
          </Route>
          <Route path="/checkOutForm">
            <CheckOutFormLayout />
          </Route>
          <Route path="/personalLayout">
            <PersonalLayout />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
