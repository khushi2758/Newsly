import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  pageSize=6;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={ ()=> <News pageSize={this.pageSize} country="Us" category="general" /> }/>
            <Route path="/business" component={()=> <News pageSize={this.pageSize} country="Us" category="business" />} />
            <Route path="/entertainment" component={()=><News pageSize={this.pageSize} country="Us" category="entertainment" />} />
            <Route path="/health" component={ ()=><News pageSize={this.pageSize} country="Us" category="health" />} />
            <Route path="/science" component={ ()=><News pageSize={this.pageSize} country="Us" category="science" />} />
            <Route path="/sports" component={ ()=><News pageSize={this.pageSize} country="Us" category="sports" />} />
            <Route path="/technology" component={ ()=><News pageSize={this.pageSize} country="Us" category="technology" />} />
          </Switch>
        </Router>
      </div>
    );
  }
}
