import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DataServices from '../API/DataServices/DataServices';
import BookCard from '../Cards/BookCard/BookCard';
import GenreList from '../GenreList/GenreList';
import LoadingAnimation from '../Loading/LoadingAnimation/LoadingAnimation';
import './AuthorInfoStyle.css';

const AuthorInfo = (props) => {

    const id = props.match.params.Id;
    const [authorData, setAuthorData] = useState([]);
    const [books, setBooks] = useState([]);
    const [isLoad, setIsLoad] = useState(false);
    const { Dark } = useSelector((state) => state.Theme);

    useEffect(() => {
        const authorInfo = async () => {
            const result = await DataServices.GetAuthor(id);
            setAuthorData(result.data);
            if (result.status === 200) {
                setIsLoad(true);
            }
        }
        authorInfo();
    }, [id]);

    useEffect(() => {
        const getBooks = async () => {
            const parameters = {
                fields: "id,booktitle,bookCover,genre,bookRating,author",
                author: id,
                pageNumber: 1,
                pageSize: 5
            }
            const result = await DataServices.GetBooksByGenre(parameters);
            setBooks(result.data);
        }
        getBooks();
    }, [id]);

    return (

        <div className={Dark ? "container" : "container light"} >
            {
                isLoad ?
                    <>
                        <div className="author-content">
                            <div className="img-box" >
                                <img src={authorData.pictureUrl} alt="author" />
                            </div >

                            <div className={"author-info"}>
                                <h2>{authorData.name}</h2>
                                <p>
                                    {authorData.bio}
                                </p>
                                <span>
                                    {authorData.dateOfBirth != null ? authorData.dateOfBirth.substring(0, 4) : null}
                                    {authorData.dateOfDeath != null ? authorData.dateOfDeath.substring(0, 4) !== "0001" ? - authorData.dateOfDeath.substring(0, 4) : "" : ""}</span>
                                <Link
                                    className="link"
                                    to={`/genre/${authorData.genre != null ? authorData.genre.id : ""}`}
                                >
                                    {authorData.genre != null ? authorData.genre.genreName : null}
                                </Link>
                            </div>
                        </div >

                        <hr />
                        {
                            books.length !== 0 &&
                            <div className="author-books">
                                <h3 className='side-title'>Books By <span>{authorData.name}</span></h3>
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
                            </div>
                        }

                        <h3 className='side-title'>Related Genres</h3>
                        <GenreList />
                    </>
                    :
                    <LoadingAnimation />
            }
        </div >
    );

}

export default AuthorInfo;