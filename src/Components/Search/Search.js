import React, { useEffect, useState } from 'react';
import DataServices from '../API/DataServices/DataServices';
import AuthorCard from '../AuthorCard/AuthorCard';
import BookCard from '../BookCard/BookCard';
import notFoundImg from '../../Images/search.png';
import './Search.css'

const Search = (props) => {

    const SearchQuery = props.match.params.SearchQuery;

    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);
    const theme = localStorage.getItem("theme");

    useEffect(() => {
        const GetBooks = async () => {
            const result = await DataServices.GetBookSearch("id, booktitle, bookCover, genre, author", `${SearchQuery}`);
            setBooks(result.data);
        }

        const GetAuthors = async () => {
            const result = await DataServices.GetAuthorsSearch(`${SearchQuery}`);
            setAuthors(result.data);
        }

        GetBooks();
        GetAuthors();
    }, [SearchQuery])

    return (
        <div className="container">

            {
                (books.length === 0 && authors.length === 0) || SearchQuery === undefined ?
                    <>
                        <img className="searchImg" src={notFoundImg} alt="not found" />
                        <p className={theme === 'light' ? "alert light" : "alert"}>we recommend you to search by book's title, author's name or publisher</p>
                    </>
                    :
                    null
            }

            {
                books.length !== 0 ?
                    <>
                        <h2 className={theme === 'light' ? "header light" : "header"}>Books</h2>
                        {
                            books.map((item) => (
                                <BookCard
                                    key={item.id}
                                    BookTitle={item.bookTitle}
                                    src={item.bookCover}
                                    AuthorName={item.author != null ? item.author.name : null}
                                    page={`/genre/${item.genre != null ? item.genre.id : null}/books/${item.id}`}
                                />
                            ))
                        }
                    </>
                    :
                    null
            }

            {authors.length !== 0 ?
                <>
                    <h2 className={theme === 'light' ? "header light" : "header"}>Authors</h2>
                    <div className="Cards">
                        {
                            authors.map((item) => (
                                <AuthorCard
                                    key={item.id}
                                    src={item.pictureUrl}
                                    name={item.name}
                                    description={item.bio}
                                    dateOfBirth={item.dateOfBirth.substring(0, 4)}
                                    dateOfDeath={item.dateOfDeath != null ? item.dateOfDeath.substring(0, 4) !== "0001" ? item.dateOfDeath.substring(0, 4) : "" : ""}
                                    page={`/Authors/${item.id}`}
                                />
                            ))
                        }
                    </div>
                </>
                :
                null
            }

        </div>
    )
}

export default Search;
