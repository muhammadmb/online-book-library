import React from 'react';
import '../../Style.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

const AuthorCard = () =>{
    return (
        <div style = {{margin: "1%"}}>
            <Card style={{ width: '19rem' }}>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1580852453081-8d2f6f42086c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <Card.Body>
                    <Card.Title>author name</Card.Title>
                    <Card.Link href="/Home">Art</Card.Link>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Book 1</ListGroupItem>
                    <ListGroupItem>Book 2</ListGroupItem>
                    <ListGroupItem>Book 3</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="/AuthorInformation">Author Books</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AuthorCard;