import React from 'react'
import './cardFlipAnimation3D.css'

const CardFlipAnimation3D = () => {
  return (
    <>
    <body>
        <div className="cardBox">
            <div className="card facebook">
                <div className="card-front">
                    <img src='images/facebook-f.svg' alt='' height='50px' />
                </div>
                <div className="card-back">
                    Facebook
                </div>
            </div>
        </div>
        <div className="cardBox">
            <div className="card twitter">
                <div className="card-front">
                    <img src='images/twitter.svg' alt='' height='50px' />
                </div>
                <div className="card-back">
                    Twitter
                </div>
            </div>
        </div>
        <div className="cardBox">
            <div className="card googleplus">
                <div className="card-front">
                    <img src='images/google-plus-g.svg' alt='' height='50px' />
                </div>
                <div className="card-back">
                    Google+
                </div>
            </div>
        </div>   
    </body>
    </>
  )
}

export default CardFlipAnimation3D