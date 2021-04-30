import style from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem'

const ImageGallery = (items) => (
  <ul className={style.ImageGallery}>
    {items.map(({ id, webformatURL, largeImageURL }) => (<ImageGalleryItem key={id}
      image={webformatURL}
      /* onClick={handleItemClick} */ />))}
  </ul>
)

export default ImageGallery