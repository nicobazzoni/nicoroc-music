
import nft from './Sample.png';
import nicoroc from './nicoroc.png';
import Gallery from 'react-photo-gallery';
import React, { useState, useCallback } from "react";
import { render } from "react-dom";

import Carousel, { Modal as Modal2, ModalGateway } from "react-images";
import { photos } from "./photos";



const Modal = ({ open, onClose }) => {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
 


  const photos = [
    
   
    {
     src: 'https://storage.googleapis.com/nicoroc_audio/IMG_0587.jpeg',
     id: 2,
     width: 480,
     height: 1024,
    },
    {
      src: 'https://storage.googleapis.com/nicoroc_audio/IMG_1784.jpeg',
      id: 3,
      width: 681,
      height: 1024,
    },
    {
      src:'https://storage.googleapis.com/nicoroc_audio/IMG_4901.JPG',
      id: 4,
      width: 681,
     height: 5000,
    },
    {
      src: 'https://storage.googleapis.com/nicoroc_audio/Attachment_1612947415.jpeg',
      id: 1,
      width: 480,
    height: 1024,
    },
    
    

  
  ]
  
  
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
      
      <div>

        <Carousel views={photos}  />
      
    </div>
        
        <p className='closeBtn' onClick={onClose}>
            X
          </p>
      </div>
    </div>
  );
};

export default Modal;