import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import './app.scss';

// page
import Forms from './SearchForm/Form.component';
import MovieCard from './MovieCard/MovieCard';
import Footer from './footer/footer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      api: [],
      search: ''
    };
  }

  handelChange = e => {
    // console.log(e.target.value);
    this.setState({
      search: e.target.value
    });
  };

  handelSumbit = e => {
    e.preventDefault();
    this.fetchData(this.state.search);
    e.currentTarget.reset();
  };

  fetchData = (query = 'batman') => {
    const key = 'd0a135171d58c78f1c69bcca1de4b35d';
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`)
      .then(res => res.json())
      .then(data => {
        this.setState(
          {
            api: data.results
          },
          console.log(this.state.api)
        );
      });
  };

  componentDidMount = () => {
    this.fetchData();
  };

  render() {
    const { api } = this.state;
    return (
      <div className="movie-app">
        <Forms handelSumbit={this.handelSumbit} handelChange={this.handelChange} />{' '}
        <MovieCard data={api} />
        <Footer />
      </div>
    );
  }
}
export default App;
