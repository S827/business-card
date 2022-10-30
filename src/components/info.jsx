import React from 'react'
import ReactDOM from 'react-dom'
import EmailIcon from '../Icons/email'
import LinkedInIcon from '../Icons/linkedin'
import ProfilePic from '../images/profile-pic.jpeg'

export default function Info() {
    return (
        <div>
            <div >
                <img className='img-div' src={ProfilePic} />
            </div>
            <h1 className='title'>Divya S. Kumar</h1>
            <h2 className='desig'>Frontend Developer</h2>
            <div className='info-links'>
                <button className='email-btn'><a className='email-link'><EmailIcon /><span className='email'> Email</span></a></button>
                <button className='linkedin-btn'><a className='linkedin-link'><LinkedInIcon /><span className='linkedin'> LinkedIn</span></a></button>
            </div>
        </div>
    )
}