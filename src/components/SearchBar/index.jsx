import style from './SearchBar.module.css'
import SearchForm from '../SearchForm'

const SearchBar = ({ onSubmit }) => (
  <header className={style.Searchbar}>
    <SearchForm onSubmit={onSubmit}></SearchForm>
  </header>
)

export default SearchBar