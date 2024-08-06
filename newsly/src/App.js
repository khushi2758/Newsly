import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

import { BrowserRouter as Router,Routes,  Route, } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
          <Router>
   
          <NavBar />
<Routes>
            <Route path="/">
              <News pageSize={5} country="Us" category="general" />
            </Route>
            <Route path="/business">
              <News pageSize={5} country="Us" category="business" />
            </Route>
            <Route path="/entertainment">
              <News pageSize={5} country="Us" category="entertainment" />
            </Route>

            <Route path="/health">
              <News pageSize={5} country="Us" category="health" />
            </Route>
            <Route path="/science">
              <News pageSize={5} country="Us" category="science" />
            </Route>
            <Route path="/sports">
              <News pageSize={5} country="Us" category="sports" />
            </Route>
            <Route path="/technology">
              <News pageSize={5} country="Us" category="technology" />
            </Route>
            </Routes>
        </Router>
      </div>
    );
  }
}
