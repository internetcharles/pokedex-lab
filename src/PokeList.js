import React, { Component } from 'react'

export default class PokeList extends Component {
    render() {
        return (
            <div>
                {this.props.data.map(pokemon => {
                    return <li>{pokemon.pokemon}</li>
                })}
            </div>
        )
    }
}
