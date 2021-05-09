import style from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, alt, onClick }) => (
  <li className={style.ImageGalleryItem}>
    <img src={image} alt={alt} className={style.ImageGalleryItemImage} onClick={onClick} />
  </li>
)

ImageGalleryItem.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem