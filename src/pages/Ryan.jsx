import { React, useState } from 'react'
import gremlin from '../assets/ryan_gremlin.JPG'
import spoon from '../assets/ryan_spoon.JPG'
import './Ryan.css'

const Ryan = () => {
  const [imgClick, setImgClick] = useState(false);

  function handleImgClick() {
    setImgClick(!imgClick);
  }

  return (
    <div className='ryan-box'>
      <img 
        src={imgClick ? gremlin : spoon} 
        alt="gremlin"
        onClick={handleImgClick}
      />
    </div>
  )
}

export default Ryan