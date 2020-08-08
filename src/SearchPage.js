import React, { Component } from 'react'
import Header from './Header';
import request from 'superagent';
import PokeList from './PokeList';
import SearchBar from './SearchBar';

export default class SearchPage extends Component {

    state = ({
        data: [],
        pokemon: [],
        search: '',
        searchType: 'pokemon',
        currentPage: 1,
        maxPages: '',
      })
    
      componentDidMount = async () => {

        const params = new URLSearchParams(this.props.location.search);

        const searchType = params.get('searchType');
        const page = params.get('page');
        const search = params.get('search')

        if (searchType && page && search) {
          await this.setState({
            searchType: searchType,
            currentPage: page,
            search: search
          })
        }
        console.log(searchType)
        await this.makeRequest();

      }

      makeRequest = async () => {
        const fetchedData = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=20&${this.state.searchType}=${this.state.search}`)
        await this.setState({ data: fetchedData.body.results, 
                              maxPages: Math.ceil(fetchedData.body.count / 20)});

        const params = new URLSearchParams(this.props.location.search);

        params.set('search', this.state.search);
        params.set('searchType', this.state.searchType);
        params.set('page', this.state.currentPage);

        this.props.history.push('?' + params.toString())
      }
    
      handleChange = (event) => {
        this.setState({ search: event.target.value })
      }

      handleSearchType = (event) => {
        this.setState({ searchType: event.target.value})
      }
    
      handleClick = async () => {

        // let link = await this.makeRequest();

        // if (this.state.search) {
        //   link = link + this.state.search;
        // }

        // const fetchedData = await request.get(`${link}`);
        // this.setState({ data: fetchedData.body.results });

        // await this.setState({ currentPage: Number(this.state.currentPage) + 1 })

        await this.makeRequest();

      }

      handleNextClick = async () => {
        await this.setState({ currentPage: Number(this.state.currentPage) + 1 })

        await this.makeRequest();
      }

      handlePrevClick = async () => {
        await this.setState({ currentPage: Number(this.state.currentPage) - 1 })

        await this.makeRequest();
      }
    
    
      render() {
        return (
          <div>
            <Header />
            <SearchBar handleSearchType={this.handleSearchType} handleChange={this.handleChange} handleClick={this.handleClick} 
            handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick} currentPage={this.state.currentPage} maxPages={this.state.maxPages}/>
            <PokeList data={this.state.data}/>
          </div>
        )
      }
}
