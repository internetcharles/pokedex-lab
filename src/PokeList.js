import React, { Component } from 'react'
import './PokeList.css'

export default class PokeList extends Component {
    render() {
        return (
            <div className="pokemon-list">
                <ul>
                    {this.props.data.map(pokemon => {
                    return  <li className="pokemon-name" key={pokemon.id}>{pokemon.pokemon.toUpperCase()}
                                <p>Type: {pokemon.type_1}</p>
                                <p>Attack: {pokemon.attack}</p>
                                <p>Defense: {pokemon.defense}</p>
                                <img src={pokemon.url_image} alt={pokemon.pokemon} />
                            </li>
                    })}
                </ul>
            </div>
        )
    }
}
