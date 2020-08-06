import React, { Component } from 'react'
import request from 'superagent'
import Header from './Header'

export default class DetailPage extends Component {

    state = { pokemon: '' }

    componentDidMount = async () => {
        const pokemonName = this.props.match.params.myPokemonName;

        console.log(pokemonName)

        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${pokemonName}`);

        const pokemon = data.body.results[0];

        console.log(pokemon)

        this.setState({ pokemon: pokemon });
    }

    render() {

        const { pokemon } = this.state;

        return (
            <div>
                <Header />
                <div className="pokemon-list">
                    <li className="pokemon-name" key={pokemon.id}>{pokemon.pokemon}
                                    <p>type: {pokemon.type_1}</p>
                                    <p>attack: {pokemon.attack}</p>
                                    <p>defense: {pokemon.defense}</p>
                                    <p>ability 1: {pokemon.ability_1}</p>
                                    <p>ability 2: {pokemon.ability_2}</p>
                                    <img src={pokemon.url_image} alt={pokemon.pokemon} />
                                </li>
                </div>
            </div>
        )
    }
}
