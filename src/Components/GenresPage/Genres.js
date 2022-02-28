import React, { useEffect, useState } from 'react';
import './GenresStyle.css';
import BookCard from '../Cards/BookCard/BookCard';
import Pagination from '@material-ui/lab/Pagination';
import DataServices from '../API/DataServices/DataServices';
import { useSelector } from 'react-redux';

const Genres = (props) => {

    const genreId = props.match.params.id;
    const [genreData, setGenreData] = useState();
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [sortBy, setSortBy] = useState();
    const fields = "id,booktitle,bookCover,genre,bookRating,author";
    const { Dark } = useSelector((state) => state.Theme);
    let [totalPages, setTotalPages] = useState();

    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleSortBy = (name) => {
        setSortBy(name);
    };

    useEffect(() => {
        const GetGenreData = async () => {
            const result = await DataServices.GetGenre(genreId, "genreName,description");
            setGenreData(result.data)
        }
        GetGenreData();
    }, [genreId])

    useEffect(() => {
        const GetBooks = async () => {
            const parameters = {
                genreId,
                fields,
                sortby: sortBy,
                pageNumber: page,
                pageSize: 16
            }
            const result = await DataServices.GetBooksByGenre(parameters);
            setBooks(result ? result.data : []);
            setTotalPages(result.headers["x-pagination"].totalPages);
        }
        GetBooks();
    }, [genreId, page, sortBy]);

    return (
        <div className="Genre">
            <div className="container">
                {
                    genreData != null ?
                        <>
                            <h1 className="header">{genreData.genreName}</h1>
                            <p className={Dark ? "GenrsDesc" : "GenrsDesc light"}>{genreData.description}</p>
                        </>
                        :
                        null
                }

                <div className="GenreDetails">
                    <div className={Dark ? "SortBy" : "SortBy light"}>
                        Sort By
                        <button onClick={() => handleSortBy("title")}>Title</button>
                        <button onClick={() => handleSortBy("popularity")}>Popularity</button>
                        <button onClick={() => handleSortBy("rating")}>Rating</button>
                    </div>

                    <div className="BookCards">
                        {
                            books != null &&
                            books.map((item) => (
                                <BookCard
                                    key={item.id}
                                    data={item}
                                />
                            ))
                        }
                    </div>
                </div>

                <div className="PaginationDiv">
                    <Pagination
                        className="Pagination"
                        count={totalPages}
                        color="secondary"
                        onChange={handleChange} />
                </div>

            </div>
        </div>
    );

}

export default Genres;