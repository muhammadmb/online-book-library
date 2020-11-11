import styled from 'styled-components';

export const Inputs = styled.input
`
    font-size : 18px;
    margin-bottom:0;
    padding: 10px;
    outline: none;
    border:none;
    margin:20px;
    width:30%;
    margin-bottom:0;
    display: online-block;
    border-radius:25px
`
export const TextArea = styled.textarea
`
    outline: none;
    border: none;
    margin: 20px;
    width: 65%;
    height: 150px;
    font-size : 18px;
    border-radius:10px;    
    padding : 10px;

`
export const Button = styled.input
`
    outline: none;
    border: solid 2px #D04000;
    display : block;
    border-radius:25px;
    padding : 10px;
    color:#D04000;
    background-color:white;
    font-weight:600;
    font-size : 15px;
    margin-left:40%;
    margin-bottom:3px;
    width:20%;
    cursor: pointer;
    &:hover{
        background-color:#D04000 ;
        color : white;
    }
`
export const Text = styled.p
`
display:block;
margin:20px;
font-size:22px;
font-weight:600;
`
export const Container = styled.div
`
    margin-top:20%;
    background-color:#F1F6F8;
    text-align:center;
    padding : 10px
`