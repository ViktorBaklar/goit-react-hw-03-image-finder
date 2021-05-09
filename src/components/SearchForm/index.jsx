import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './SearchForm.module.css'
import Button from '../UI/button'
import Input from '../UI/input'

class SearchForm extends Component {
  state = { query: '' };

  handleChange = event => {
    this.setState({ query: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <form className={style.SearchForm} onSubmit={this.handleSubmit}>
        <Button type="submit" className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}>Search</span>
        </Button>

        <Input
          className={style.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handleChange}
        />
      </form>

    )
  }
}

SearchForm.propTypes = {
  qwery: PropTypes.string,
};

export default SearchForm