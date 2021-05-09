import style from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem'
import PropTypes from 'prop-types';

const ImageGallery = ({ items, onClick }) => (
  <ul className={style.ImageGallery}>
    {
      items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem key={id}
          image={webformatURL}
          onClick={() => onClick(largeImageURL, tags)} />
      ))
    }
  </ul>
)

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default ImageGallery