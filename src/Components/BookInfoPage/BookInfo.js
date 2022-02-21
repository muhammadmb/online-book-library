import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './BookInfoStyle.css';
import MiniCard from '../Card/HomeCard';
import BooksRate from '../books Rate/BooksRate';
import CreateComment from '../CreateComment/CreateComment';
import Reviews from '../Reviews/Reviews';
import DataServices from '../API/DataServices/DataServices';
import Skeleton from '@material-ui/lab/Skeleton';

const BookInfo = (props) => {

    const id = props.match.params.id;
    const genreId = props.match.params.genreId;
    const [genreBooks, setGenreBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [bookData, setBookData] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const theme = localStorage.getItem("theme");
    let authorLink = `/authors/${bookData.author != null ? bookData.author.id : 0}`;

    useEffect(() => {
        const GetBook = async () => {
            const result = await DataServices.GetBookDetails(genreId, id);
            if (result.status === 200) {
                setIsLoad(true);
            }
            setBookData(result.data);
        }

        const GetGenreBooks = async () => {
            const result = await DataServices.GetBooksByGenre(`${genreId}`, "id,booktitle,bookCover,genre", 1, 5);
            setGenreBooks(result.data);
        }

        const GetGenres = async () => {
            const result = await DataServices.GetGenres(1, 10, "");
            setGenres(result.data);
        }

        GetBook();
        GetGenreBooks();
        GetGenres();
    }, [genreId, id]);

    const BooksList = (props) => (
        props.list.map(item =>
            <MiniCard
                key={item.id}
                name={item.bookTitle}
                page={`genre/${item.genre.id}/books/${item.id}`}
                cover={item.bookCover}
            />
        )
    )

    const GenresList = () => (
        genres.map(item =>
            <MiniCard
                key={item.id}
                name={item.genreName}
                page={`genre/${item.id}`}
                cover={item.picUrl}
            />
        )
    )

    return (
        <div className="container">

            {
                isLoad ?
                    <div className="bookInfo">
                        <div className="leftSection">
                            <div className="imgDiv">

                                <img src={bookData.bookCover} alt={bookData.bookTitle} title={bookData.bookTitle} />

                            </div>
                            <span
                                className={theme === 'light' ? 'light' : ''}
                            >
                                Published <span>{bookData.dateOfPublish != null ? bookData.dateOfPublish.substring(0, 4) : 2000}</span>
                            </span>
                            <span
                                className={theme === 'light' ? 'light' : ''}
                            >
                                Pages <span>{bookData.numberOfBookPages}</span>
                            </span>
                            <span
                                className={theme === 'light' ? 'light' : ''}
                            >
                                Publisher <span>{bookData.publisher}</span>
                            </span>
                        </div>

                        <div className="rightSection">

                            <h1 className={theme === 'light' ? "light" : ""}>{bookData.bookTitle}</h1>

                            {bookData.author != null ?
                                <span
                                    className={theme === 'light' ? "light" : ""}
                                >
                                    By
                                    <Link
                                        className="link"
                                        to={authorLink}
                                    >
                                        {bookData.author.name}
                                    </Link>
                                </span>
                                :
                                null}

                            <Box
                                className="rating"
                                borderColor="transparent"
                            >
                                <Rating
                                    name="hover-feedback"
                                    precision={1}
                                    value={bookData.bookRating != null ? bookData.bookRating.bookRate : 0}
                                    readOnly
                                />
                            </Box>

                            <span
                                className={theme === 'light' ? "light" : ""}
                            >
                                ({bookData.reviews != null ? bookData.reviews.length : 0} Reviews)
                            </span>

                            <div className="Clear"></div>

                            <p className={theme === 'light' ? "light" : ""}>
                                {bookData.description}
                            </p>
                        </div>

                        <div className="Clear"></div>

                        <hr className={theme === 'light' ? "light" : ""} />

                        {
                            bookData.bookRating != null ?
                                <BooksRate rates={bookData.bookRating} />
                                :
                                <BooksRate rates={null} />
                        }

                        <CreateComment content={bookData} />

                        {
                            bookData.reviews != null ?

                                bookData.reviews.map((item) => (
                                    <Reviews content={item} genreId={bookData.genre.id} key={item.id} />
                                ))
                                :
                                null
                        }

                        <hr className={theme === 'light' ? "light" : ""} />

                        <span
                            className={theme === 'light' ? "suggestionSpan light" : "suggestionSpan"}
                        >
                            Popular books in {bookData.genre != null ? bookData.genre.genreName : 0}
                        </span>

                        <div className="books">
                            <BooksList list={genreBooks} />
                        </div>

                        <span className={theme === 'light' ? "suggestionSpan light" : "suggestionSpan"}>Genres</span>

                        <div className="books">
                            <GenresList />
                        </div>

                    </div>
                    :
                    <div className="skeletons">
                        <Skeleton className="skeleton-rect" variant="rect" width={285} height={430} />
                        <Skeleton className="skeleton-text" variant="text" height={60} />
                        <div className="Clear"></div>
                    </div>
            }

        </div>
    );
}

export default BookInfo;