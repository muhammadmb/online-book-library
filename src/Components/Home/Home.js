import React from 'react';
import HomePic from "../../Images/HomePic.png";
import Button from 'react-bootstrap/Button';
import Swipper from '../Swipper/Swipper.js';
import {Image,WelcomeDiv,WelcomeInnerDiv, WelcomeText} from './HomeStyle.js';
// Import Swiper React components
import { Swiper } from 'swiper/react';

const Home = () => {

    return(
        <div style = {{width : 1170, margin:"auto"}}>
            <mainDiv>
                <WelcomeDiv>
                    <WelcomeInnerDiv>
                        <WelcomeText Title>Hi, welcome back!</WelcomeText>
                        <WelcomeText >Here is a customised world of books for you.</WelcomeText>
                        <Button variant="outline-info" style = {{margin:25}}>Browse Latest</Button>
                    </WelcomeInnerDiv>
                    <Image src = {HomePic} alt="Home picture"/>
                </WelcomeDiv>
                <text style = {{color:"#A2A5BF", marginLeft:"12%", fontSize: "20px", textDecoration:"underline"}}>Recommended For You</text> 
                
                <div style = {{marginTop : 20, width : "80%", marginLeft : "10%", marginBottom : "2%"}}>
                    <Swipper BookCard={true} />
                </div>
                <text style = {{color:"#A2A5BF", marginLeft:"12%", fontSize: "20px", textDecoration:"underline"}}>Catagories</text> 

                <div style = {{marginTop : 20, width : "80%", marginLeft : "10%"}}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={6}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        >
                        <Swipper />
                    </Swiper>
                </div>
            </mainDiv>
        </div>
    );
}

export default Home;
