import React from 'react';
import AuthorCard from '../AuthorCard/AuthorCard';

const authorPage = () =>{
    return (
        <div style = {{margin : "4%", display : "flex", flexWrap : "wrap"}}>
            
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