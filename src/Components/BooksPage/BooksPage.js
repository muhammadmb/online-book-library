import React, { useEffect, useState } from 'react';
import './BookPageStyle.css';
import BookCard from '../BookCard/BookCard';
import BooksSlider from '../Slider/Slider';
import DataServices from '../API/DataServices/DataServices';
import { Link } from 'react-router-dom';

const BookPage = () => {

    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const GetGenres = async () => {
            const result = await DataServices.GetGenres(1, 10, "genreName,id,picUrl,Books");
            setGenres(result.data);
        }
        GetGenres();
    }, []);

    return (
        <div className="BookPage">

            <BooksSlider />

            <div className="container content">

                {
                    genres.map((item) => (
                        item.books.length !== 0 ?
                            <div key={item.id}>
                                <h2 className="section"><Link className="link" to={`/genre/${item.id}`}><span>{item.genreName}</span></Link></h2>

                                {
                                    item.books.map((book) => (
                                        <BookCard
                                            key={book.id}
                                            BookTitle={book.bookTitle}
                                            src={book.bookCover}
                                            AuthorName={book.author != null ? book.author.name : null}
                                            page={`/genre/${item.id}/books/${book.id}`}
                                        />
                                    ))
                                }
                            </div>
                            :
                            null
                    ))
                }

            </div>
        </div>
    );
}

export default BookPage;
