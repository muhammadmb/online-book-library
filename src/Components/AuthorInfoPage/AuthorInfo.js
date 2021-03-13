import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../BookCard/BookCard';
import './AuthorInfoStyle.css';

const AuthorPage = () => {

    return (
        <div className="container">
            <div className="author-content">
                <div className="img-box">
                    <img src="https://images.unsplash.com/photo-1614594955631-e977926ea681?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=654&q=80" alt="author" />
                </div>

                <div className="author-info">
                    <h2>Ahmed Salah</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. posuere et quam. Phasellus interdum magna augue, in gravida lectus scelerisque ac. Quisque cursus lacus id iaculis bibendum. Curabitur suscipit fermentum pellentesque. Vestibulum eu accumsan nibh,.
                    </p>
                    <span>dateOfBirth - dateOfDeath</span>
                    <Link className="link">Genre</Link>
                </div>

                <div className="Clear"></div>

                <hr />

                <div className="author-books">
                    <h3>Popular books of authorName</h3>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" />
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" />
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" />
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" />
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg" />

                </div>

            </div>
        </div>
    );

}

export default AuthorPage;