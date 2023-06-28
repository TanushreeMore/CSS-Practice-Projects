import React from 'react'
import './imageHoverEffect.css'
// import CoverImage from './cover.jpg';

const ImageHoverEffect = () => {
  return (
    <>
    <div className="container">
        <div className="imageBox">
            {/* <img alt="cover" src={CoverImage}/> */}
            <img src='images/beach.jpg' alt='' />
            <div className="textBox">
                <h1>Image Hover Effect</h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default ImageHoverEffect