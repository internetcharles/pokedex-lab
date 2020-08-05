import React, { Component } from 'react'
import Header from './Header';
import request from 'superagent';
import PokeList from './PokeList';

const requests = { 
  baseUrl: 'https://alchemy-pokedex.herokuapp.com/api/pokedex',
  pokemon: '?pokemon=',
  abilities: 'abilities',
  shapes: 'shapes'}

export default class App extends Component {

  state = ({
    data: [],
    searchQuery: null,
    currentType: null,
    types: ['fire', 'grass', 'flying', 'rock']
  })

  componentDidMount = async () => {
    const data = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex');
    this.setState({ data: data.body.results });
  }

  handleChange = (event) => {
    this.setState({ searchQuery: event.target.value })
  }

  handleClick = async () => {
    const fetchedData = await request.get (`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.state.searchQuery}`)
    this.setState({ data: fetchedData.body.results })
  }

  handleType = async (event) => {
    this.setState({ currentType: event.target.value })
    const fetchedData = await request.get (`https://alchemy-pokedex.herokuapp.com/api/pokedex/?type=${this.state.currentType}`)
    this.setState({ data: fetchedData.body.results })
  }

  render() {
    return (
      <div>
        <Header />
        <input onChange={this.handleChange}></input>
        <select onChange={this.handleType}>
          <option value='' defaultValue></option>
          { this.state.types.map( type => {
          return <option value={type}>{type}</option>
  })}
        </select>
        <PokeList data={this.state.data}/>
        <button onClick={this.handleClick} >Submit</button>
      </div>
    )
  }
}
