import React from 'react';
import {Link} from 'react-router-dom';
import BookCard from '../BookCard/BookCard';
import RecomendedBar from '../RecomendedBar/RecomendedBar'
import {AuthorImage, AText, AuthorName, Descriprion, CatagoryPage} from './AuthorInformationStyle.js';

const AuthorInformation = () =>{
    return (
        <>
            <div>
                <AuthorImage src = "https://images.unsplash.com/photo-1603550575421-c63eb933c597?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                <div style = {{display : "inline-block"}}>    
                    <AuthorName>Scot Allen</AuthorName>
                    <Descriprion> author info </Descriprion>
                    <CatagoryPage href = "/catagory">catagory</CatagoryPage>
                </div>
                <AText>Author's Books</AText>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            </div>
        </>
    );
}

export default AuthorInformation;