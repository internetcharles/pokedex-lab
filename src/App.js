import React, { Component } from 'react'
import Header from './Header';
import request from 'superagent';
import PokeList from './PokeList';
import SearchBar from './SearchBar';
import './App.css'

export default class App extends Component {

  state = ({
    data: [],
    nameSearchQuery: null,
    currentType: null,
    types: ['', 'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy']
  })

  componentDidMount = async () => {
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    this.setState({ data: data.body.results });
  }

  handleChange = (event) => {
    this.setState({ nameSearchQuery: event.target.value })
  }

  handleType = async (event) => {
    this.setState({ currentType: event.target.value })
  }

  handleAttackChange = (event) => {
    this.setState({ attackValue: event.target.value })
  }

  handleClick = async () => {
    let link = 'https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon='

    if (this.state.nameSearchQuery) {
      link = link + this.state.nameSearchQuery;
    }

    if (this.state.currentType) {
      link = link + '&type=' + this.state.currentType;
    }

    if (this.state.attackValue) {
      link = link + '&attack=' + this.state.attackValue;
    }


    console.log(link);

    const fetchedData = await request.get(`${link}`);
    this.setState({ data: fetchedData.body.results });
  }



  render() {
    return (
      <div>
        <Header />
        <SearchBar types={this.state.types} handleChange={this.handleChange} handleAttackChange={this.handleAttackChange} handleType={this.handleType} handleClick={this.handleClick} />
        <PokeList data={this.state.data}/>
      </div>
    )
  }
}
