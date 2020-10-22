import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export default ({ images })=> {
  console.log(images);
  const gallery = images.map(item => ({ original: item, thumbnail: item }));
  return(
    <ImageGallery
      items={gallery}
      showPlayButton={false}
    />
  )
}