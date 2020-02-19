import React from 'react';

import { Col } from 'react-bootstrap';

import './MovieCardPreview.style.scss';

import { Link } from 'react-router-dom';

const Limit = (title, limit = 70) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);

    return `${newTitle.join(' ')} ...`;
  }

  return title;
};

const MovieCardPreview = ({ id, title, overview, vote_average, poster_path, release_date }) => (
  <Col md={4}>
    <div className="card-primary " key={id}>
      <div className="movie-pic">
        <img
          alt="poster"
          width="120"
          src={'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + poster_path}
        />
      </div>

      <div className="movie-info">
        <h1 className="movie-title"> {title} </h1>

        <p className="released-date"> {release_date} </p>

        <p className="movie-overview"> {Limit(overview)} </p>

        <p className="movie-rating">
          <span className="movie-rating">
            Rating: {vote_average}
            /10
          </span>
          <span className="movie-detail">
            <Link className="movie-detail-link" to={`/SingleMovie/${id}`}>
              More
            </Link>
          </span>
        </p>
      </div>
    </div>
  </Col>
);

export default MovieCardPreview;
