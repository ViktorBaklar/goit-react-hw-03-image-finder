import style from './SearchForm.module.css'
import Button from '../UI/button'
import Input from '../UI/input'

const SearchForm = () => (
  <form className={style.SearchForm}>
    <Button type="submit" className={style.SearchFormButton}>
      <span className={style.SearchFormButtonLabel}>Search</span>
    </Button>

    <Input
      className={style.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
)

export default SearchForm