import React from 'react';
import './GenresStyle.css';
import BookCard from '../BookCard/BookCard';
import Pagination from '@material-ui/lab/Pagination';

const Genres = () =>{

    return(
        <div className="Genre">
            <div className="container">

                <div className="SortBy">
                    Sort By
                    <button>Title</button>
                    <button>Popularity</button>
                    <button>Rating</button>
                </div>
               
                <div className="GenreDetails">
                    <h1 className="header">GenresName</h1>
                    <p className="GenrsDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus quis nibh non sagittis. Nulla viverra felis eget posuere mattis. Nulla facilisi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse id accumsan lacus. Phasellus condimentum volutpat libero id finibus. Nunc placerat fermentum aliquam. Mauris velit est, semper a nisi laoreet, venenatis vulputate ipsum. Aenean erat odio, suscipit sit amet mollis et.</p>

                    <div className="phoneScreen">
                        Sort By
                        <button>Title</button>
                        <button>Popularity</button>
                        <button>Rating</button>
                    </div>
                    
                    <div className="BookCards">
                        <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                        <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                        <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                        <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                        <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                        <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                        <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                        <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                        <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                        <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                        <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                        <BookCard BookTitle="A Milion To One" AuthorName="Tony Faggioli" src="https://www.designforwriters.com/wp-content/uploads/2017/10/design-for-writers-book-cover-tf-2-a-million-to-one.jpg"/>
                    </div>

                </div>
                <div className="Clear"></div>
                <div className="PaginationDiv">
                    <Pagination className="Pagination" count={10} color="secondary"/>
                </div>
            </div>
        </div>
    );

}

export default Genres;