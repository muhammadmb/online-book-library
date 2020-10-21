import React from 'react';
import {Image, ContainerDiv, CardItems, ItemsData, AuthorPage} from './BookCardStyle.js'
const BookCard = () => {
  
    return(
        <div>
            <ContainerDiv style ={{display : "inline-flex"}}>
                <Image src = "https://images.unsplash.com/photo-1484415063229-3d6335668531?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <div >
                    <CardItems style ={{display : "block"}}> Name : <ItemsData>Book's Name</ItemsData></CardItems>
                    <CardItems style ={{display : "block"}}> Author : <AuthorPage href = "#"> Author Name </AuthorPage></CardItems>
                    <CardItems style ={{display : "block"}}> Price : <ItemsData>130 $</ItemsData></CardItems>
                    <CardItems style ={{display : "block"}}> Publisher : <ItemsData>MOMO</ItemsData></CardItems>
                    <CardItems style ={{display : "block"}}> date : <ItemsData>1990</ItemsData></CardItems>
                </div>
                <div style = {{marginLeft : 220}}>
                    <h4>
                        Description
                    </h4>
                    <p>
                        fsfhgjlasfksajgjdfsdfjdfgj
                        dgjdsfdfdgdfdf, 
                        dgdghgf
                        fdgdd
                        hhhhh
                        sdfdsfds
                        gdfdsgd
                    </p>
                </div>
            </ContainerDiv>
        </div>
    );
}

export default BookCard;
