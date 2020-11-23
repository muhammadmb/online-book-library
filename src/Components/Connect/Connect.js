import React, { Component, Fragment } from 'react';
import Discuss from '../Discuss/DiscussMail';
import {ContactDiv, Text, Details} from './style.js'
import Contact from '../../Images/contact.jpg'

const Connect = () => {
  
    return(
        <div style = {{backgroundImage : `URL(${Contact})`, backgroundSize:"cover"}}>
            <div style = {{width : 1170, margin:"auto", textAlign:"center"}}>
                <div style = {{overflow:"hidden"}}>
                    <ContactDiv>
                        <Text>Give us a call</Text>
                        <Details>(423) 558 524 225</Details>
                    </ContactDiv>
                    <ContactDiv>
                        <Text>Send us an email</Text>
                        <Details>BookReaders@BR.com</Details>                    
                    </ContactDiv>
                    <ContactDiv>
                        <Text>Visit us at</Text>
                        <Details>33 Manufactures Rd Alexandria, Egypt</Details>
                    </ContactDiv>
                </div>
            </div>
            
            <Discuss/>
        </div>
    );
}
export default Connect;
