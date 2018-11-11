import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Axios from 'axios';
import Home from '../Home';
import FourOhFour from '../FourOhFour';
import SearchPage from '../SearchPage/SearchPage';
// import RootPage from '../Home/RootPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={SearchPage} />
        <Route component={FourOhFour} />
      </Switch>
    );
  }
}

export default App;
