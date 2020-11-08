import styled from 'styled-components';

export const AuthorImage = styled.img
`
    margin : 5%;
    height: 350px;
    border-radius:10%;
`
export const AText = styled.text
`
    display:block;
    margin:2%;
    margin-left:5%;
    color : white;
    font-size : 25px;
    font-weight:600;
`
export const AuthorName = styled.h1
`
    color : white;
`
export const Descriprion = styled.p
`
    color:white;
    width:80%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

`
export const CatagoryPage = styled.a `
    color:#1fa6b9;
    font-weight: 500;
    &:hover {
        text-decoration: "underline";
        color:#1a6670;
    }
`