import React, {useEffect, useState} from 'react';
import ImageGroup from '../components/ImagesGroup';


const Gallery = ()=>{

return(
  <>
  <div id="gallery">
    <ImageGroup heading="Sessions" folder="sessions"/>
  </div>
  
  </>
)
}

export default Gallery;
