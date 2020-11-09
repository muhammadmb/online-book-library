import React from 'react';
import HomePic from "../../Images/HomePic.png";
import Button from 'react-bootstrap/Button'
import CatagoryCard from '../CatagoryCard/CatagoryCard';
import {Image,WelcomeDiv,WelcomeInnerDiv,mainDiv, WelcomeText} from './HomeStyle.js';
import MiniBookCard from '../MiniBookCard/MiniBookCard';
const Home = () => {

    return(
        <div>
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
                <div style = {{marginTop: "1%", marginLeft: "8%",display : "flex", flexWrap : "wrap"}}>
                    <MiniBookCard/>
                    <MiniBookCard/>
                    <MiniBookCard/>
                    <MiniBookCard/>
                    <MiniBookCard/>
                    <MiniBookCard/>
                    <MiniBookCard/>
                    <MiniBookCard/>
                    <MiniBookCard/>
                    <MiniBookCard/>
                </div>

                <text style = {{color:"#A2A5BF", marginLeft:"12%", fontSize: "20px", textDecoration:"underline"}}>Catagories</text> 

                <div style = {{marginTop: "1%", marginLeft: "8%",display : "flex", flexWrap : "wrap"}}>
                    <CatagoryCard/>
                    <CatagoryCard/>
                    <CatagoryCard/>
                    <CatagoryCard/>
                    <CatagoryCard/>
                    <CatagoryCard/>
                    <CatagoryCard/>
                    <CatagoryCard/>
                    <CatagoryCard/>
                    <CatagoryCard/>
                </div>
            </mainDiv>
        </div>
    );
}

export default Home;
