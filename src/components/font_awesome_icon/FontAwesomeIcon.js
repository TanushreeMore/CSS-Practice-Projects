import React from 'react'
import './fontAwesomeIcon.css';
import { FaFacebookSquare, FaTwitter,  FaGooglePlusG, FaSkype, FaLinkedin} from "react-icons/fa";


function FontAwesomeIcons() {
  return (
    <div>
        <div className="container">
            <div className="icon facebook">
                <FaFacebookSquare className='fa'/>
            </div>
            <div className="icon twitter">
                <FaTwitter className='fa'/>
            </div>
            <div className="icon googleplus">
                <FaGooglePlusG className='fa'/>
            </div>
            <div className="icon skype">
                <FaSkype className='fa'/>
            </div>
            <div className="icon linkedIn">
                <FaLinkedin className='fa'/>
            </div>
        </div>
    </div>
  )
}

export default FontAwesomeIcons