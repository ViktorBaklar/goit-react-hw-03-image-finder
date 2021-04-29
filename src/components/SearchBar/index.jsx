import style from './SearchBar.module.css'
import SearchForm from '../SearchForm'

const SearchBar = () => (
  <header className={style.Searchbar}>
    <SearchForm></SearchForm>
  </header>
)

export default SearchBar