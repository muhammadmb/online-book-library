import React from 'react';
import BookCard from '../BookCard/BookCard';
import Background from '../../Images/libraryBackground.jpg';
import {BackgroundDiv, Text, Paragraph} from './BookPageStyle';

const Footer = () => {
  
    return(
        <>
            <BackgroundDiv style = {{backgroundImage : `url(${Background})`}} >
                
                
                <Text>
                    We Provide special collections of books
                </Text>
                <Paragraph>
                    BookReaders Library is an open, editable library catalog, building towards a web page for every book ever published. 
                </Paragraph>
            </BackgroundDiv>
            <div style = {{width : 1170, margin:"auto"}}>
                <div>
                    <BookCard/>
                    <BookCard/>
                    <BookCard/>
                </div>
            </div>
        </>
    );
}

export default Footer;
