import React from 'react';
import BookCard from '../BookCard/BookCard';
import Background from '../../Images/AuthorPage.jpg';
import {AuthorImage, AText, AuthorName, Descriprion, CatagoryPage} from './AuthorInformationStyle.js';

const AuthorInformation = () =>{
    return (
        <>
            <div>
                <div style = {{ backgroundImage : `url(${Background})`, width : "85%", margin:"5%",borderBottomLeftRadius:"20%"}}>
                    <AuthorImage src = "https://images.unsplash.com/photo-1603550575421-c63eb933c597?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
                    <div style = {{display : "inline-block", margin : "3%",padding : "1%"}}>    
                        <AuthorName>Scot Allen</AuthorName>
                        <Descriprion> author info </Descriprion>
                        <CatagoryPage href = "/catagory">catagory</CatagoryPage>
                    </div>
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