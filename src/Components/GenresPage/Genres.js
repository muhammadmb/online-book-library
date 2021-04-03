import React, { useEffect, useState } from 'react';
import './GenresStyle.css';
import BookCard from '../BookCard/BookCard';
import Pagination from '@material-ui/lab/Pagination';
import DataServices from '../API/DataServices/DataServices';

const Genres = (props) => {

    const Id = props.match.params.id;
    const [genreData, setGenreData] = useState();
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [sortBy, setSortBy] = useState();
    const theme = localStorage.getItem("theme");

    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleSortBy = (name) => {
        setSortBy(name);
    };

    useEffect(() => {
        const GetGenreData = async () => {
            const result = await DataServices.GetGenre(Id);
            setGenreData(result.data)
        }
        GetGenreData();
    }, [Id])

    useEffect(() => {
        const GetBooks = async () => {
            const result = await DataServices.GetBooksByGenre(Id, "id,booktitle,bookCover,genre, author", page, 8, sortBy);
            setBooks(result.data)
        }
        GetBooks();
    }, [Id, page, sortBy]);

    return (
        <div className="Genre">
            <div className="container">
                {
                    genreData != null ?
                        <>
                            <h1 className="header">{genreData.genreName}</h1>
                            <p className={theme === 'light' ? "GenrsDesc light" : "GenrsDesc"}>{genreData.description}</p>
                        </>
                        :
                        null
                }

                <div className="GenreDetails">

                    <div className={theme === 'light' ? "SortBy light" : "SortBy"}>
                        Sort By
                        <button onClick={() => handleSortBy("title")}>Title</button>
                        <button onClick={() => handleSortBy("popularity")}>Popularity</button>
                        <button onClick={() => handleSortBy("rating")}>Rating</button>
                    </div>
                    <div className="BookCards">

                        {
                            books != null ?

                                books.map((item) => (
                                    <BookCard
                                        key={item.id}
                                        BookTitle={item.bookTitle}
                                        AuthorName={item.author != null ? item.author.name : null}
                                        src={item.bookCover}
                                        page={`${item.genre.id}/books/${item.id}`}
                                    />
                                ))
                                :
                                null
                        }
                    </div>

                </div>

                <div className="Clear"></div>
                <div className="PaginationDiv">
                    <Pagination className="Pagination" count={10} color="secondary" onChange={handleChange} />
                </div>
            </div>
        </div>
    );

}

export default Genres;