import React from 'react';
import './BookPageStyle.css';
import BookCard from '../BookCard/BookCard';
import Background from '../../Images/libraryBackground.jpg';

const Footer = () => {
  
    return(
        <div className="BookPage">
            <div className ="Header" style = {{ backgroundImage : `url(${Background})`}}>
                <div className="container">
                    <h2>
                        We Provide special collections of books
                    </h2>
                    <p>
                        BookReaders Library is an open, editable library catalog, building towards a web page for every book ever published. 
                    </p>
                </div>
            </div>
            <div className="container content">
                <h2 className="section"><span>Editor's Choice</span></h2>
                <div>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                </div>

                <h2 className="section"><span>Tranding Books</span></h2>
                <div>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                </div>

                <h2 className="section"><span>Popular Classics</span></h2>
                <div>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                </div>
                
            </div>
        </div>
    );
}

export default Footer;
