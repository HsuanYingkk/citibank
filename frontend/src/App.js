import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";


import company_page from './components/company_page';
import index from './components/index';
import Search from './components/search';

class App extends Component {
  state = {}
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={index} exact />
          <Route path='/search' component={Search} exact />
          <Route path='/company/:id' component={company_page} exact />
          {/* <Route path='/table' component={Finace_table} exact /> */}
        </Switch>
      </BrowserRouter>);
  }
}
export default App;
