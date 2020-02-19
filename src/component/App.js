import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import './app.scss';

import SingleMovie from '../component/SingleMovie/SingleMovie';

// ROUTER ..
import { Route, Switch } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';

// page
import Header from './header/header';
import MovieCard from './MovieCard/MovieCard';
import Footer from './footer/footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="movie-app">
          <Header />
          <Switch>
            <Route exact path="/" component={MovieCard} />
            <Route path="/SingleMovie/:id" component={SingleMovie} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
