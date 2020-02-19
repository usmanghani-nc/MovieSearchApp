import React, { Component } from 'react';

import { Container, Row } from 'react-bootstrap';

import MovieCardPreview from '../MovieCardPreview/MovieCardPreview';
import Forms from '../SearchForm/Form.component';

class MovieCard extends Component {
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
        this.setState({
          api: data.results
        });
      });
  };

  componentDidMount = () => {
    this.fetchData();
  };
  render() {
    const { api } = this.state;
    return (
      <React.Fragment>
        <Forms handelSumbit={this.handelSumbit} handelChange={this.handelChange} />{' '}
        <div className="Movie-card">
          <Container>
            <Row>
              {api.map(({ ...otherProps }) => (
                <MovieCardPreview key={otherProps.id} {...otherProps} />
              ))}
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default MovieCard;
