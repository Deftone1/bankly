import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/bankly" component={Home}  />
          <Route exact path="/signin" component={SignInPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
