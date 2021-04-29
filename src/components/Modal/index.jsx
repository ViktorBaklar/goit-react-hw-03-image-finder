import * as basicLightbox from 'basiclightbox'

const instance = basicLightbox.create(`
  <div className="Overlay">
    <div className="Modal">
      <img src="" alt="" />
    </div>
  </div>
`)

instance.show()