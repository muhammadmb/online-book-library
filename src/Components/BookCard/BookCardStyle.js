import styled from 'styled-components';

export const Image = styled.img `
    margin: 10px;
    width: 200px;
    height: 200px;
    border-radius: 10px;
`

export const ContainerDiv = styled.div `
    margin: 10px;
    margin-left:40px;
    width: 90%;
    height: 220px;
    border-radius: 15px;
    border-bottom: 2px solid #033d45;
    background-color:rgba(164, 217, 224, 0.1);
`
export const CardItems = styled.text `
    font-weight: 700;
    margin: 15px;

`
export const ItemsData = styled.span `
    font-weight: 500;
`
export const AuthorPage = styled.a `
    color:#1fa6b9;
    font-weight: 500;
    &:hover {
        text-decoration: "underline";
        color:#1a6670;
    }
`
