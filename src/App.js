import "./App.css";
import HomeLayout from "./Layout/HomeLandingPageComponent/HomeLayout";
// import HomeLayout from './components/Layout/HomeLandingPageComponent/HomeLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SigninForm from "./components/signinForm/SigninForm";
import React from "react";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeLayout />
          </Route>
          <Route path="/signIn">
            <SigninForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
