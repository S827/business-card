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
            <div>
                <button><a><EmailIcon />Email</a></button>
                <button><a><LinkedInIcon />LinkedIn</a></button>
            </div>
        </div>
    )
}