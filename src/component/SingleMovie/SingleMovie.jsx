import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock } from '@fortawesome/free-solid-svg-icons';

import '../SingleMovie/SingleMovie.scss';

class SingleMovie extends Component {
  constructor() {
    super();
    this.state = {
      singleMovieData: ''
    };
  }

  fetchData = async mId => {
    const key = 'd0a135171d58c78f1c69bcca1de4b35d';
    try {
      let data = await fetch(`https://api.themoviedb.org/3/movie/${mId}?api_key=${key}`);
      let finalData = await data.json();
      this.setState({
        singleMovieData: finalData
      });
    } catch (e) {
      console.log(`${e} :<`);
    }
  };

  componentDidMount = () => {
    this.fetchData(this.props.match.params.id);
  };

  render() {
    const {
      runtime,
      genres,
      status,
      production_companies,
      poster_path,
      title,
      release_date,
      overview,
      vote_average
    } = this.state.singleMovieData;

    return (
      <React.Fragment>
        <div className="Single-movie">
          <div className="container">
            <div className="row">
              {/*  Single-movie-pic  */}
              <div className="col-md-5">
                <div className="Single-movie-pic">
                  <img
                    alt="poster"
                    src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + poster_path}
                  />
                </div>
              </div>

              <div className="col-md-7">
                <div className="Single-movie-container">
                  <div className="movie-info">
                    <div className="movie-title">
                      <h2>{title}</h2>
                      <span className="released-date"> {`(${release_date})`} </span>
                    </div>
                    {/*  */}
                    <div className="info d-flex">
                      <p className="rating-star">
                        <FontAwesomeIcon icon={faStar} className="icon-star" /> {vote_average} /10
                      </p>

                      <p className="status"> {status} </p>

                      <p className="genral">
                        {genres && genres && genres.map(e => <span key={e.id}>{e.name}</span>)}
                      </p>
                    </div>

                    <div className="run-time">
                      <p>
                        <FontAwesomeIcon icon={faClock} className="icon-clock mr-1" />
                        {`${runtime} Min `}
                      </p>
                    </div>

                    {/* overview */}
                    <div className="movie-overview">
                      <h2>Overview</h2>
                      <p>{overview}</p>
                    </div>

                    {/* componies */}
                    <div className="production_companies">
                      <div className="companie d-flex">
                        {production_companies &&
                          production_companies &&
                          production_companies.map(e => (
                            <div key={e.id} className="pr-1 ">
                              <div className="companie-img">
                                <img
                                  className="img-fluid"
                                  src={
                                    'https://image.tmdb.org/t/p/w100_and_h100_bestv2/' + e.logo_path
                                  }
                                  alt="mm"
                                />
                              </div>

                              <div className="companie-title">
                                <p>{e.name}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SingleMovie;
