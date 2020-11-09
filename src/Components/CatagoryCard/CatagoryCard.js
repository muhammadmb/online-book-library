import React from 'react';
import {CatagoryLink, Image} from './CatagoryCardStyle'

const CatagoryCard = () =>{

    return (
        <>
            <div style = {{margin : ".5%" }}>
                <Image src = "https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <CatagoryLink href = "/" > Art </CatagoryLink>
            </div>
        </>
    );

}
export default CatagoryCard;