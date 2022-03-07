import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './BookInfoStyle.css';
import BooksRate from '../BooksRate/BooksRate';
import CreateComment from '../CreateComment/CreateComment';
import Reviews from '../ReviewsList/Reviews';
import DataServices from '../API/DataServices/DataServices';
import { useSelector } from 'react-redux';
import GenreList from '../GenreList/GenreList';
import GenreBooks from '../GenreBooks/GenreBooks';
import BookLoading from '../Loading/BookLoading/BookLoading';

const BookInfo = (props) => {

    const id = props.match.params.id;
    const genreId = props.match.params.genreId;
    const [bookData, setBookData] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const { Dark } = useSelector((state) => state.Theme);
    let authorLink = `/authors/${bookData.author ? bookData.author.id : ""}`;

    useEffect(() => {
        const GetBook = async () => {
            const result = await DataServices.GetBookDetails(genreId, id);
            if (result.status === 200) {
                setIsLoad(true);
            }
            setBookData(result.data);
        }
        GetBook();
    }, [genreId, id]);

    return (
        <>
            <div className={Dark ? "container" : "container light"}>
                {
                    isLoad && bookData.length !== 0 ?
                        <>
                            <div className="book-info">

                                <div className="book-img">
                                    <img src={bookData.bookCover} alt={bookData.bookTitle} title={bookData.bookTitle} />
                                </div>

                                <div className="information">
                                    <h1 >{bookData.bookTitle}</h1>

                                    {
                                        bookData.author != null ?
                                            <span>
                                                By
                                                <Link
                                                    className="link"
                                                    to={authorLink}
                                                >
                                                    {bookData.author.name}
                                                </Link>
                                            </span>
                                            :
                                            null
                                    }

                                    <div>
                                        <Box
                                            className="rating"
                                            borderColor="transparent"
                                        >
                                            <Rating
                                                name="hover-feedback"
                                                precision={.5}
                                                value={bookData.bookRating != null ? bookData.bookRating.bookRate : 0}
                                                readOnly
                                                size='small'
                                            />

                                            <span
                                                className="reviews-number"
                                            >
                                                ({bookData.bookRating != null ? bookData.bookRating.reviewsCount : 0} Reviews)
                                            </span>

                                            <span
                                                className='side-info '
                                            >
                                                {bookData.numberOfBookPages} Pages
                                            </span>

                                            <span
                                                className='side-info'
                                            >
                                                Publisher: {bookData.publisher} - {bookData.dateOfPublish != null ? bookData.dateOfPublish.substring(0, 4) : ""}
                                            </span>
                                        </Box>
                                    </div>

                                    <hr />

                                    <h4>book overview</h4>
                                    <p >
                                        {bookData.description}
                                    </p>
                                </div>
                            </div>

                            {
                                bookData.bookRating != null &&
                                <>
                                    <hr />
                                    <BooksRate rates={bookData.bookRating} />
                                </>
                            }

                            <CreateComment content={bookData} />

                            <Reviews genreId={genreId} bookId={id} />

                            <span
                                className="sugesstion-title"
                            >
                                Related to {bookData.genre != null ? bookData.genre.genreName : ""}
                            </span>

                            <GenreBooks genreId={genreId} />

                            <span className="sugesstion-title">Recommended Genres</span>
                            <GenreList />
                        </>
                        :
                        <div className="book-info">
                            <BookLoading />
                        </div>
                }
            </div>
        </>
    );
}

export default BookInfo;