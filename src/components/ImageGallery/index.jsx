import style from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem'

const ImageGallery = () => (
  <ul className={style.ImageGallery}>
    <ImageGalleryItem></ImageGalleryItem>
  </ul>
)

export default ImageGallery