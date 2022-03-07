import React, { useEffect } from 'react';
import './BookPageStyle.css';
import BooksSlider from '../Slider/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres } from '../../Store/GenreSlice';
import GenreBooks from '../GenreBooks/GenreBooks';
import BookLoading from '../Loading/BookLoading/BookLoading';

const BookPage = () => {

    const Dispatch = useDispatch();
    const { genres, isLoading } = useSelector((state) => state.Genre);

    useEffect(() => {
        Dispatch(getGenres({
            fields: "genreName, id",
            PageNumber: 1,
            PageSize: 6
        }));
    }, [Dispatch]);

    return (
        <div className="book-page">

            <BooksSlider />

            <div className='books-container'>
                {
                    !isLoading ?
                        genres &&
                        genres.map((item) => (
                            <div
                                key={item.id}
                            >
                                {
                                    <GenreBooks genreId={item.id} genreName={item.genreName} />
                                }
                            </div>
                        ))
                        :
                        <BookLoading />
                }

            </div>
        </div>
    );
}

export default BookPage;
