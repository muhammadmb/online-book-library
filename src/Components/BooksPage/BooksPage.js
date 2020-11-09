import React from 'react';
import BookCard from '../BookCard/BookCard';
import Image from '../ImageSlider/ImageSlider';

const Footer = () => {
  
    return(
        <>
            {/* <div style = {{marginLeft : "5%", marginTop : "1%", marginBottom : "5%",}}> */}
                {/* <Image /> */}
               {/* <BookCard/> */}
            {/* </div> */}
            <div>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            </div>
        </>
    );
}

export default Footer;
