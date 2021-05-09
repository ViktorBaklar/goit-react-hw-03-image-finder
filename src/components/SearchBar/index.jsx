import style from './SearchBar.module.css'
import PropTypes from 'prop-types';
import SearchForm from '../SearchForm'

const SearchBar = ({ onSubmit }) => (
  <header className={style.Searchbar}>
    <SearchForm onSubmit={onSubmit}></SearchForm>
  </header>
)

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


export default SearchBar