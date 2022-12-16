import React,{useState, useEffect} from 'react';

import ReactPlayer from "react-player";




const Gallery = ({ openVideo, onVideoClose }) => {

  
  if (!openVideo) return null;
  return (
    <div onClick={onVideoClose} className='videoOverlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='videoModalContainer'
      >
    
    <div className="main">
        <ReactPlayer url='https://www.youtube.com/watch?v=So6zCsOM6D4'  />
 <p className='closeBtn' onClick={onVideoClose}>
            X
          </p>

  </div>
        
       
      </div>
    </div>
  );
};

export default Gallery;