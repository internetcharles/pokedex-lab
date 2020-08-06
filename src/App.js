import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import './App.css'
import SearchPage from './SearchPage';
import DetailPage from './DetailPage';

export default class App extends Component {
  render() {
    return (
      <div>
      <Router>
          <Switch>
              <Route 
                  path="/" 
                  exact
                  render={(routerProps) => <SearchPage {...routerProps} />} 
              />
              <Route 
                  path="/:myPokemonName" 
                  render={(routerProps) => <DetailPage {...routerProps} />} 
              />
          </Switch>
      </Router>
  </div>
    )
  }
}
