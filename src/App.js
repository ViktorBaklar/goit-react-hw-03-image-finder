import { Component } from "react"
import './App.css';
import PropTypes from 'prop-types';
import apiPixabayService from './services/apiPixabayService'
import Container from './components/UI/container'
import SearchBar from './components/SearchBar'
import ImageGallery from './components/ImageGallery'

class App extends Component {
  state = {
    pictures: [],
    page: 1,
    query: '',
    largeImage: '',
    imgTags: '',
    error: '',
    showModal: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchPictures();
    }
    if (this.state.page !== 2 && prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchPictures = () => {
    const { page, query } = this.state;

    const options = {
      page,
      query,
    };

    this.setState({ isLoading: true });

    apiPixabayService(options)
      .then(pictures => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error: 'Picture not found' }))
      .finally(() => this.setState({ isLoading: false }));
  };
  onChangeQwery = query => {
    this.setState({ query: query, page: 1, pictures: [], error: null });
  };


  render() {
    const {
      pictures,
      isLoading,
      error,
      showModal,
      largeImage,
      imgTags,
    } = this.state;
    return (
      <div className="App" >
        <Container>
          <SearchBar onSubmit={this.onChangeQwery} ></SearchBar>
          <ImageGallery items={pictures}></ImageGallery>
        </Container>
      </div>
    );
  }
}

App.propTypes = {
  pictures: PropTypes.array,
  page: PropTypes.number,
  query: PropTypes.string,
  largeImage: PropTypes.string,
  imgTags: PropTypes.string,
  error: PropTypes.string,
  showModal: PropTypes.bool,
  isLoading: PropTypes.bool,
};

export default App;
