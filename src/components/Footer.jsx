import React from 'react'
import ReactDOM from 'react-dom'
import Twitter from  '../Icons/twitter'
import Github from '../Icons/github'
import Instagram from '../Icons/insta'
import Facebook from  '../Icons/facebook'

export default function Footer() {
    return (
        <div className='footer'>
            <a href='https://twitter.com/home'><Twitter /></a>
            <a href='https://github.com/S827'><Github /></a>
            <a href='https://www.instagram.com/'><Instagram /></a>
            <a href='#'><Facebook /></a>
        </div>
    )
}