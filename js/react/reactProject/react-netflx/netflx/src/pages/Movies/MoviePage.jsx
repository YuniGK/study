import React, { useState } from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import MovieCard from '../../common/MovieCard/MovieCard';

import ReactPaginate from 'react-paginate';

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [itemOffset, setItemOffset] = useState(0);
  const [page, setPage] = useState(1);

  const keyword = query.get('q');

  const {data, isLoading, isError, error} = useSearchMovieQuery({keyword, page});

    if(isLoading){
      <ClipLoader
        color="#000"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    }

    if(isError){
      <Alert key="danger" variant="danger">{error.message}</Alert>
    }

    const handlePageClick = ({selected}) => {
      setPage(selected+1);
    };

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>필터</Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} xs={12}><MovieCard movie={movie} /></Col>
            ))}
          </Row>
          {/* https://codepen.io/monsieurv/pen/abyJQWQ */}
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page-1}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default MoviePage