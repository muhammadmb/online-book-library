import React from 'react';
import {Image, ContainerDiv, CardItems, ItemsData, AuthorPage, AuthorParagraph} from './BookCardStyle.js'
const BookCard = () => {
  
    return(
        <div>
            <ContainerDiv style ={{display : "inline-flex"}}>
                <Image src = "https://images.unsplash.com/photo-1484415063229-3d6335668531?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <div>
                    <CardItems style ={{display : "block"}}><ItemsData>Book's Name</ItemsData> By : <AuthorPage href = "#"> Author Name </AuthorPage></CardItems>
                    <CardItems style ={{display : "block", color:"#b4e3ed",fontSize:13}}><ItemsData>From Elliott Holt I Feb 2020</ItemsData></CardItems>
                    <CardItems style ={{display : "block"}}> Price : <ItemsData>130 $</ItemsData></CardItems>
                    <CardItems><AuthorPage href = "#"> Catagory </AuthorPage></CardItems>
                    <AuthorParagraph>
                        Lorem ipsum dolor sit amet,consectetuer adipiscing elit.
                        Aenean commodo ligula  eget dolor.
                        Lorem ipsum dolor sit amet
                    </AuthorParagraph>
                </div>
                
            </ContainerDiv>
        </div>
    );
}

export default BookCard;
