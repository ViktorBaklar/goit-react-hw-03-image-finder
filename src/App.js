// import { Component } from "react"
import './App.css';
import Container from './components/UI/container'
import SearchBar from './components/SearchBar'
import ImageGallery from './components/ImageGallery'

function App() {
  return (
    <div className="App">
      <Container>
        <SearchBar></SearchBar>
        <ImageGallery></ImageGallery>
      </Container>
    </div>
  );
}

export default App;
