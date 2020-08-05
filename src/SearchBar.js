import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="searchbar">
                <input onChange={this.props.handleChange}></input>
                <input onChange={this.props.handleAttackChange} placeholder="Min. Attack"></input>
                <select onChange={this.props.handleType}>
                <option value='' defaultValue></option>
                { this.props.types.map( type => {
                return <option key={type} value={type}>{type}</option>
        })}
                </select>
                <button onClick={this.props.handleClick} >Submit</button>
            </div>
        )
    }
}
