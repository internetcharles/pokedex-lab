import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="searchbar">
                <input onChange={this.props.handleChange} placeholder="Pokemon Name"></input>
                {/* <input onChange={this.props.handleAttackChange} placeholder="Min. Attack"></input> */}
                <select onChange={this.props.handleSearchType}>
                    <option value='pokemon'>Pokemon</option>
                    <option value='attack'>Min. Attack</option>
                    <option value='defense'>Min. Defense</option>
                    <option value='type_1'>Type</option>
                </select>
                <button onClick={this.props.handleClick}>Submit</button>
            </div>
        )
    }
}
