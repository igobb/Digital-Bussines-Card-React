import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from '../images/logo.JPG'
import emailLogo from '../images/email_icon.png';
import linkedinLogo from '../images/linkedin_logo.png';
export default function Info() {
    return (
        <div className='info'>
            <img src={logo} alt="photo of user" className='info-avatar'/>
            <h1>Tomasz Gołąb</h1>
            <h2>Frontend Developer</h2>
            <a href="https://igobb.github.io/Portfolio_site/" className='info-link'>My own site </a>
            <div className='info-buttons'>
                <button className='info-email-button'><img src={emailLogo} alt=""/>Email</button>
                <button className='info-linkedin-button'><img src={linkedinLogo} alt=""/>LinkedIn</button>
            </div>
        </div>
    )
}