import React, { useEffect, useState } from 'react';
import './BookPageStyle.css';
import BookCard from '../BookCard/BookCard';
import BooksSlider from '../Slider/Slider';
import DataServices from '../API/DataServices/DataServices';
import { Link } from 'react-router-dom';
import { Skeleton } from '@material-ui/lab';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BookPage = () => {

    const [genres, setGenres] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const theme = localStorage.getItem("theme");

    useEffect(() => {
        const GetGenres = async () => {
            const result = await DataServices.GetGenres(1, 10, "genreName,id,picUrl,Books");
            if (result.status === 200) {
                setIsLoad(true);
            }
            setGenres(result.data);
        }
        GetGenres();
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="BookPage">

            <BooksSlider />

            <div className="container content">

                {
                    isLoad !== true ?
                        <>
                            <Skeleton className="Skeleton" variant="text" height={60} />
                            <Skeleton className="Skeleton" variant="rect" width={160} height={245} />
                        </>
                        :
                        null
                }

                {
                    genres.map((item) => (
                        item.books.length !== 0 ?
                            <div
                                key={item.id}
                                data-aos="fade-up"
                            >
                                <h2 className="section">
                                    <Link className="link" to={`/genre/${item.id}`}>
                                        <span
                                            className={theme === 'light' ? "light" : ""}
                                        >
                                            {item.genreName}
                                        </span>
                                    </Link>
                                </h2>

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
