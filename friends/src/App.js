import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="title">
            <h3>Friends List</h3>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>

              <li>
                <Link to="/protected">Friends</Link>
              </li>
            </ul>
          </div>
        </header>
        <Switch>
          <PrivateRoute exact path="/protected" component={FriendsList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
