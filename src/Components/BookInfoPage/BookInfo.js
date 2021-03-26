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

const BookInfo = () => {

    let Ids = window.location.pathname.substring(10).split('/');
    const [genreBooks, setGenreBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [bookData, setBookData] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    let authorLink = `/authors/${bookData.author != null ? bookData.author.id : 0}`;

    useEffect(() => {
        const GetBook = async () => {
            const result = await DataServices.GetBookDetails(Ids[0], Ids[1]);
            setBookData(result.data);
            setIsLoad(true);
        }

        const GetGenreBooks = async () => {
            const result = await DataServices.GetBooksByGenre(`${Ids[0]}`, "id,booktitle,bookCover,genre", 1, 5);
            setGenreBooks(result.data);
        }

        const GetGenres = async () => {
            const result = await DataServices.GetGenres(1, 10);
            setGenres(result.data);
        }

        GetBook();
        GetGenreBooks();
        GetGenres();
    }, []);

    const BooksList = (props) => (
        props.list.map(item =>
            <MiniCard
                key={item.id}
                name={item.bookTitle}
                page={`BookInfo/${item.genre.id}/${item.id}`}
                cover={item.bookCover}
            />
        )
    )

    const GenresList = () => (
        genres.map(item =>
            <MiniCard
                key={item.id}
                name={item.genreName}
                page="genre"
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
                            <span>Published {bookData.dateOfPublish != null ? bookData.dateOfPublish.substring(0, 4) : 2000}</span>
                            <span>Pages {bookData.numberOfBookPages}</span>
                            <span>Publisher {bookData.publisher}</span>
                        </div>

                        <div className="rightSection">

                            <h1>{bookData.bookTitle}</h1>

                            <span>By <Link className="link" to={authorLink}>{bookData.author != null ? bookData.author.name : null}</Link></span>
                            <Box className="rating" borderColor="transparent">
                                <Rating name="hover-feedback" precision={1} value={bookData.bookRating != null ? bookData.bookRating.bookRate : 0} readOnly />
                            </Box>
                            <span>({bookData.reviews != null ? bookData.reviews.length : 0} Reviews)</span>
                            <div className="Clear"></div>
                            <p>
                                {bookData.description}
                            </p>
                        </div>
                        <div className="Clear"></div>
                        <hr />

                        {
                            bookData.bookRating != null ?
                                <BooksRate rates={bookData.bookRating} />
                                :
                                <BooksRate rates={null} />
                        }

                        <CreateComment content={bookData} />

                        {bookData.reviews.map((item) => (
                            <Reviews content={item} key={item.id} />
                        ))}

                        <hr />

                        <span className="suggestionSpan">Popular books in {bookData.genre != null ? bookData.genre.genreName : 0}</span>
                        <div className="books">
                            <BooksList list={genreBooks} />
                        </div>

                        <span className="suggestionSpan">Genres</span>
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