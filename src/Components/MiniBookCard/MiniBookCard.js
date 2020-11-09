import React from 'react';
import {Image, BookTitle, BookLink} from './MiniBookCardStyle.js'; 

const MiniBookCard = () =>{

    return (
        <div style = {{margin : "1%" }}>
            <Image src = "https://images.unsplash.com/photo-1511108690759-009324a90311?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            <BookTitle> Book name </BookTitle>
            <BookLink href = "/">More about</BookLink>
        </div>
    );
}
export default MiniBookCard;