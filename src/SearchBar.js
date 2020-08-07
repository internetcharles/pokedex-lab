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
                <p className="page-count">Page {this.props.currentPage} / {this.props.maxPages} </p>
                <p>
                    { 
                        this.props.currentPage !== 1 
                        && <button onClick={this.props.handlePrevClick}>Prev</button>
                    }
                    { 
                        this.props.currentPage !== this.props.maxPages
                        && <button onClick={this.props.handleNextClick}>Next</button>
                    }

                </p>
            </div>
        )
    }
}
