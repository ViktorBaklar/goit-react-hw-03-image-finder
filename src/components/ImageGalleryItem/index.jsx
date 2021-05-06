import style from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, alt, onClick }) => (
  <li className={style.ImageGalleryItem}>
    <img src={image} alt={alt} className={style.ImageGalleryItemImage} onClick={onClick} />
  </li>
)

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  bigImage: PropTypes.func,
};

export default ImageGalleryItem