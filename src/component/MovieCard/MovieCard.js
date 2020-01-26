import React from 'react';

import { Container, Row } from 'react-bootstrap';

import MovieCardPreview from '../MovieCardPreview/MovieCardPreview';

const MovieCard = ({ data }) => (
  <div className="Movie-card">
    <Container>
      <Row>
        {data.map(({ id, ...otherProps }) => (
          <MovieCardPreview key={id} {...otherProps} />
        ))}
      </Row>
    </Container>
  </div>
);

export default MovieCard;
