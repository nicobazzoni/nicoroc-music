import React from 'react';
import nft from './Sample.png';
import nicoroc from './nicoroc.png';
import Gallery from 'react-photo-gallery';



const Modal = ({ open, onClose }) => {


  const photos = [
    {
      src: 'https://storage.googleapis.com/nicoroc_audio/Attachment_1612947415.jpeg',
      width: 1,
      height: 1
    },
    {
     src: 'https://storage.googleapis.com/nicoroc_audio/IMG_0587.jpeg',
     width: 1,
    height: 1
    },
    {
      src: 'https://storage.googleapis.com/nicoroc_audio/IMG_1784.jpeg',
      width: 1,
    height: 1
    },
    {
      src:'https://storage.googleapis.com/nicoroc_audio/IMG_4901.JPG',
      width: 1,
      height: 1
    },
    {
      src:'https://storage.googleapis.com/nicoroc_audio/IMG_4901.JPG',
      width: 1,
      height: 1
    },
    

  
  ];
  
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
      
        <Gallery  photos={photos} />
        
        <p className='closeBtn' onClick={onClose}>
            X
          </p>
      </div>
    </div>
  );
};

export default Modal;