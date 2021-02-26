import React from 'react';
import './FooterStyle.css';

const Footer = () => {
  
    let currentYear = new Date().getFullYear();

    return(
        <div className="footer">
            <div className="container">

                <div className="firstPartation">
                    
                    <h1>
                    <span>
                        <svg className="BookIcon bi bi-book" xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                        </svg>
                    </span>
                        Book<span>Readers</span>
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus efficitur ex, non efficitur orci semper et. Sed et enim turpis. Cras vehicula velit ipsum, vel laoreet eros sodales vitae. Curabitur quis elit ipsum. Nunc convallis laoreet sodales.</p>
                    <a target='_blank' rel="noopener noreferrer" href="http://www.facebook.com" title = "Facebook" className="fa fa-facebook"></a>
                    <a target='_blank' rel="noopener noreferrer"  href="http://www.twitter.com" title = "Twitter" className="fa fa-twitter"></a>
                    <a target='_blank' rel="noopener noreferrer"  href="http://www.youtube.com" title = "Youtub" className="fa fa-youtube"></a>
                    <a target='_blank' rel="noopener noreferrer"  href="http://www.linkedin.com" title = "LinkedIn" className="fa fa-linkedin"></a>
                    <a target='_blank' rel="noopener noreferrer"  href="http://www.linkedin.com" title = "LinkedIn" className="fa fa-instagram"></a>
                </div>

                <div className = "MostPopular">
                    <h3>Most Popular in {currentYear}</h3>
                    <span className="popularBooks">A Million to one</span>
                    <span className="popularBooks">Amara the brave</span>
                    <span className="popularBooks">The Martian</span>
                    <span className="popularBooks">Tress of the road</span>
                </div>

                <div className = "AddressPartation">
                    <h3>Address</h3>
                    <span>127, westwood lane</span>
                    <span>DA15 9PS, Sidcup</span>
                    <span>London, UK</span>
                </div>
                <div className="Clear"></div>

                <p className="footerParagraph">All right Reserved by ©BookReaders 2015 - {currentYear}</p>
                
                <div className="Clear"></div>
            </div>
        </div>
    );
}

export default Footer;
