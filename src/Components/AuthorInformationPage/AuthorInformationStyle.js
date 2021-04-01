import styled from 'styled-components';

export const AuthorImage = styled.img
`
    // margin : 5%;
    height: 350px;
    border-bottom-left-radius:20% ;
`
export const InfoDiv = styled.div
`
    background-image : "https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=711&q=80"
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
    color : #021247;
`
export const Descriprion = styled.p
`
    color:#021247;
    width:80%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

`
export const CatagoryPage = styled.a `
    color:#035a80;
    font-weight: 500;
    &:hover {
        text-decoration: "underline";
        color:#1a6670;
    }
`