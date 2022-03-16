import React from 'react';
import './FooterStyle.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => {

    let currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="container">
                <div className="information">
                    <h1>
                        <span>
                            <svg className="book-icon bi bi-book" xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                            </svg>
                        </span>
                        Book<span>Readers</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus efficitur ex, non efficitur orci semper et. Sed et enim turpis. Cras vehicula velit ipsum, vel laoreet eros sodales vitae. Curabitur quis elit ipsum. Nunc convallis laoreet sodales.</p>
                </div>

                <div className="social">
                    <h3>Social</h3>
                    <a target='_blank' rel="noopener noreferrer" href="http://www.facebook.com" title="Facebook" className="social-icon"> <FacebookIcon /> </a>
                    <a target='_blank' rel="noopener noreferrer" href="http://www.twitter.com" title="Twitter" className="social-icon"> <TwitterIcon /> </a>
                    <a target='_blank' rel="noopener noreferrer" href="http://www.youtube.com" title="Youtub" className="social-icon"> <YouTubeIcon /> </a>
                    <a target='_blank' rel="noopener noreferrer" href="http://www.linkedin.com" title="LinkedIn" className="social-icon"> <LinkedInIcon /> </a>
                    <a target='_blank' rel="noopener noreferrer" href="http://www.Instagram.com" title="Instagram" className="social-icon"> <InstagramIcon /> </a>
                    <a target='_blank' rel="noopener noreferrer" href="http://www.Pinterest.com" title="Pinterest" className="social-icon"> <PinterestIcon /> </a>
                </div>

                <div className="address-partation">
                    <h3>Address</h3>
                    <span>127, westwood lane</span>
                    <span>DA15 9PS, Sidcup</span>
                    <span>London, UK</span>
                </div>

            </div>
            <p className="rights-partation">All right Reserved by ©BookReaders 2015 - {currentYear}</p>
        </div>
    );
}

export default Footer;