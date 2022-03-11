import React, { useEffect, useState } from 'react';
import DataServices from '../API/DataServices/DataServices';
import AuthorCard from '../AuthorCard/AuthorCard';
import BookCard from '../Cards/BookCard/BookCard';
import GenreList from '../GenreList/GenreList';
import './Search.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Search = (props) => {

    const SearchQuery = props.match.params.SearchQuery;

    const [books, setBooks] = useState([]);
    const [booksHeaders, setBooksHeaders] = useState([]);
    const [authors, setAuthors] = useState([]);
    const [authorHeaders, setAuthorHeaders] = useState([]);
    const bookxPagination = booksHeaders["x-pagination"] !== undefined ? JSON.parse(booksHeaders["x-pagination"]) : {};
    const authorxPagination = authorHeaders["x-pagination"] !== undefined ? JSON.parse(authorHeaders["x-pagination"]) : {};
    const { Dark } = useSelector((state) => state.Theme);
    const [booksPageNumber, setBookPageNumber] = useState(1);
    const [authorsPageNumber, setAuthorPageNumber] = useState(1);

    useEffect(() => {

        const GetBooks = async () => {
            const parameters = {
                fields: "id,booktitle,bookCover,genre,bookRating,author",
                SearchQuery: SearchQuery,
                pageNumber: booksPageNumber,
                pageSize: 5
            }
            const result = await DataServices.GetBookSearch(parameters);
            setBooks(result.data);
            setBooksHeaders(result.headers);
        }

        if (SearchQuery !== undefined) {
            GetBooks();
        }
    }, [SearchQuery, booksPageNumber]);

    useEffect(() => {
        const GetAuthors = async () => {

            const parameters = {
                fields: "id,name,bio,pictureUrl,dateOfBirth,dateOfDeath",
                SearchQuery: SearchQuery,
                pageNumber: authorsPageNumber,
                pageSize: 4
            }

            const result = await DataServices.GetAuthorsSearch(parameters);
            setAuthors(result.data);
            setAuthorHeaders(result.headers);
        }
        if (SearchQuery !== undefined) {
            GetAuthors();
        }
    }, [SearchQuery, authorsPageNumber])

    return (
        <div className="container">
            <div className={Dark ? "search-result" : "search-result light"}>
                {
                    ((books.length === 0 && authors.length === 0) || SearchQuery === undefined) ?
                        <>
                            <h3>No Results for “{SearchQuery}”</h3>
                            <div className='side-title'>browse by <Link className='link' to='/books'>Books</Link></div>

                            <div className="genres">
                                <div className='side-title'>or by browse genres</div>
                                <GenreList />
                            </div>

                        </>
                        :
                        <h3>Results for “{SearchQuery}”</h3>
                }

                {
                    books.length !== 0 ?
                        <>
                            <h2 className="header">Books <span className='results-number'>{bookxPagination.totalCount} results</span></h2>
                            <div className="books-list">
                                {
                                    books.map((item) => (
                                        <BookCard
                                            key={item.id}
                                            data={item}
                                        />
                                    ))
                                }
                            </div>

                            <div className='nav-buttons'>
                                <button
                                    className='nav-btn previous'
                                    onClick={() => setBookPageNumber(booksPageNumber - 1)}
                                    disabled={!bookxPagination.hasPrevious}
                                >
                                    Previous
                                </button>

                                <button
                                    className='nav-btn next'
                                    onClick={() => setBookPageNumber(booksPageNumber + 1)}
                                    disabled={!bookxPagination.hasNext}
                                >
                                    Next
                                </button>
                            </div>

                        </>
                        :
                        null
                }

                {
                    authors.length !== 0 ?
                        <>
                            <h2 className="header">Authors <span className='results-number'>{authorxPagination.totalCount} results</span></h2>
                            <div className="books-list">
                                {
                                    authors.map((item) => (
                                        <AuthorCard
                                            key={item.id}
                                            data={item}
                                        />
                                    ))
                                }
                            </div>

                            <div className='nav-buttons'>
                                <button
                                    className='nav-btn previous'
                                    onClick={() => setAuthorPageNumber(authorsPageNumber - 1)}
                                    disabled={!authorxPagination.hasPrevious}
                                >
                                    Previous
                                </button>

                                <button
                                    className='nav-btn next'
                                    onClick={() => setAuthorPageNumber(authorsPageNumber + 1)}
                                    disabled={!authorxPagination.hasNext}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                        :
                        null
                }
            </div>


        </div>
    )
}

export default Search;
