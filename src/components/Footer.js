import React from "react";
import ReactDOM from "react-dom/client";
import twitterIcon from '../images/twitter_icon.png';
import facebookIcon from '../images/facebook_icon.png';
import instagramIcon from '../images/instagram_icon.png';
import githubIcon from '../images/github_icon.png';

export default function Footer() {
    return (
        <div className='footer'>
            <img src={twitterIcon} alt="Twitter icon"/>
            <img src={facebookIcon} alt="Facebook icon"/>
            <img src={instagramIcon} alt="Instagram icon"/>
            <img src={githubIcon} alt="Github icon"/>
        </div>
    )
}