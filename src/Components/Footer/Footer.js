import React from 'react';

const Footer = () => {
  
    return(
        <>
            <div className="container">
                <hr/>
                <div>
                    <span style = {{fontSize : "20px", color:"white"}}>Follow Us </span>
                    <a target='_blank' href="http://www.facebook.com" title = "Facebook" className="fa fa-facebook"></a>
                    <a target='_blank' href="http://www.twitter.com" title = "Twitter" className="fa fa-twitter"></a>
                    <a target='_blank' href="http://www.youtube.com" title = "Youtub" className="fa fa-youtube"></a>
                    <a target='_blank' href="http://www.linkedin.com" title = "LinkedIn" className="fa fa-linkedin"></a>
                </div>
            </div>
        </>
    );
}

export default Footer;
