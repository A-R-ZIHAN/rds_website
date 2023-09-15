import React, {useEffect, useState} from 'react';
import { getDownloadURL, ref, listAll, getMetadata } from "firebase/storage";
import {storage} from '../firebase'; 
 



const ImageGroup = (props)=>{

 // Create a child reference
const imagesRef = ref(storage, props.folder);

const [images,setImages] = useState(new Set());

const fetchImages =  function(){
    listAll(imagesRef)
      .then((res) => {

        res.items.forEach((itemRef) => {
          // All the items under listRef.

          getDownloadURL(itemRef)
          .then((url)=>
          {
            setImages(current=> new Set([...current,url]))
            
          })
        });
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
  }
  

  useEffect(()=>{
    fetchImages()
  },[])

  

  return (
    <>
    <h1>{props.heading}</h1>
    <div className='imageGroup'>
      <div className='column'>
      {images && [...images].sort().map((item,i)=>(
       
          
            <div className="photo" key={i}>
              <img src={item} alt="" />
            </div>
      ))}
      </div>
    </div>
    </>
  );

} 
export default ImageGroup;