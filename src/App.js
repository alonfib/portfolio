import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Portfolio from "./Portfolio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Portfolio} />
        <Route path="/admin" component={() => <h1>admin</h1>} />
        <Route path="/zibi" component={() => <h1>zibi</h1>} />
      </Router>
    </div>
  );
}

export default App;
