import React from 'react';
import {Icons, FooterDiv, HR} from './FooterStyle'

const Footer = () => {
  
    return(
        <>
            <div>
                <HR/>
                <FooterDiv  >
                    <text style = {{fontSize : "20px", color:"white"}}>Follow Us </text>
                    <Icons target='_blank' href="http://www.facebook.com" title = "Facebook" className="fa fa-facebook"></Icons>
                    <Icons target='_blank' href="http://www.twitter.com" title = "Twitter" className="fa fa-twitter"></Icons>
                    <Icons target='_blank' href="http://www.youtube.com" title = "Youtub" className="fa fa-youtube"></Icons>
                    <Icons target='_blank' href="http://www.linkedin.com" title = "LinkedIn" className="fa fa-linkedin"></Icons>
                </FooterDiv>
            </div>
        </>
    );
}

export default Footer;
