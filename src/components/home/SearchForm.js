import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/searchActions';

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie ,TV series ..
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />
            <button type="submit" className="btn btn-success btn-bg mt-3">
              Search
            </button>
            <br></br> 
           <a
                href={'https://www.imdb.com/chart/toptv/?ref_=nv_tvv_250'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger mt-3 mr-3"
              >
              Top Rated TV Shows
              </a>&nbsp;&nbsp;

              <a
                href={'https://www.imdb.com/chart/top?ref_=nv_mv_250'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-danger mt-3 mr-8 "
              >
              Top Rated Movies
              </a>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);
