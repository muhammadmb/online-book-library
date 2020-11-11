import styled from 'styled-components';

export const Image = styled.img `
    margin: 10px;
    width: 200px;
    height: 200px;
    border-radius: 10px;
`

export const ContainerDiv = styled.div `
    margin: 10px;
    margin-left:60px;
    width: 80%;
    height: 220px;
    border-radius: 15px;
`
export const CardItems = styled.text `
    font-weight: 700;
    margin: 15px;
    color:white

`
export const ItemsData = styled.span `
    font-weight: 500;
    color:white
`
export const AuthorPage = styled.a `
    color:#1fa6b9;
    font-weight: 500;
    &:hover {
        text-decoration: "underline";
        color:#1a6670;
    }
`
export const AuthorParagraph = styled.p
`
    margin-left:12px;
    color:white;
    width:60%;
    margin-top:3.5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`