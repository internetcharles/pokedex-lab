import React, { Component } from 'react'
import './PokeList.css'
import { Link } from 'react-router-dom'

export default class PokeList extends Component {
    render() {
        return (
            <div>
                <ul className="pokemon-list">
                    {this.props.data.map(pokemon => {
                    return  <Link key={pokemon.id} to={`/${pokemon.pokemon}`}>
                            <li className="pokemon-name">{pokemon.pokemon.toUpperCase()}
                                {/* <p>Type: {pokemon.type_1}</p>
                                <p>Attack: {pokemon.attack}</p>
                                <p>Defense: {pokemon.defense}</p> */}
                                <p>
                                    <img src={pokemon.url_image} alt={pokemon.pokemon} />
                                </p>
                            </li>
                            </Link>
                    })}
                </ul>
            </div>
        )
    }
}
