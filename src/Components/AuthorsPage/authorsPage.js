import React from 'react';
import AuthorCard from '../AuthorCard/AuthorCard';

const authorPage = () =>{
    return (
        <div style = {{width : 1170, margin : "auto", display : "flex", flexWrap : "wrap"}}>
            
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
            <AuthorCard />
        </div>
        
    );
}

export default authorPage;