import styled from 'styled-components';

export const mainDiv = styled.div 
`
    background-color: #444447 ;
    border-top: 50px;
    margin-left: 250px;
    width: 100%;
`
export const WelcomeDiv = styled.div 
`
    border: 2px solid white;
    border-radius : 50px;
    width:70%;
    margin:40px;
    position: relative;
    right:-10%;
`
export const WelcomeInnerDiv= styled.div 
`
    display: inline;
`
export const Image = styled.img
`
    position: absolute;
    right:5%;
    margin : 20px;
    margin-top: -160px;
    margin-left : 380px;
`
export const WelcomeText = styled.text
`
    display:block;
    color : white;
    margin: 25px;
    font-size: ${props => props.Title ? '20px' : '18px'};
    font-weight: ${props => props.Title ? 800 : 400};
    letter-spacing: ${props => props.Title ? '3px' : ''};
    font-family:"Comic Sans MS", cursive, sans-serif;


`