import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataServices from '../API/DataServices/DataServices';
import BookCard from '../Cards/BookCard/BookCard';
import './GenreBooksStyle.css';

const GenreBooks = ({ genreId, genreName }) => {

    const { Dark } = useSelector((state) => state.Theme);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const GetBooks = async () => {
            const parameters = {
                genreId,
                fields: "id,booktitle,bookCover,genre,bookRating,author",
                pageNumber: 1,
                pageSize: 5
            }
            const result = await DataServices.GetBooksByGenre(parameters);
            if (result.status === 200) {
                setBooks(result ? result.data : []);
            }
        }
        GetBooks();
    }, [genreId]);

    return (
        <div className='genre-book'>
            {
                books.length !== 0 &&
                <>
                    {
                        genreName &&
                        <h2 className="section">
                            <Link className="link" to={`/genre/${genreId}`}>
                                <span
                                    className={Dark ? "" : "light"}
                                >
                                    {genreName}
                                </span>
                            </Link>
                        </h2>
                    }
                    <div className="books">
                        {
                            books.map((item) => (
                                < BookCard
                                    key={item.id}
                                    data={item}
                                />
                            ))
                        }
                    </div>
                </>
            }

        </div>
    )
}

export default GenreBooks;