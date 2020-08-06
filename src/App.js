import React, { Component } from 'react'
import Header from './Header';
import request from 'superagent';
import PokeList from './PokeList';
import SearchBar from './SearchBar';
import './App.css'
import SearchPage from './SearchPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchPage></SearchPage>
      </div>
    )
  }
}
