import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DataServices from '../API/DataServices/DataServices';
import BookCard from '../BookCard/BookCard';
import './AuthorInfoStyle.css';
import Skeleton from '@material-ui/lab/Skeleton';

const AuthorInfo = (props) => {

    const id = props.match.params.Id;
    const [authorData, setAuthorData] = useState([]);
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        const authorInfo = async () => {
            const result = await DataServices.GetAuthor(id);
            setAuthorData(result.data);
            setIsLoad(true);
        }
        authorInfo();
    }, []);

    return (
        <div className="container">
            {
                isLoad ?
                    <div className="author-content">
                        <div className="img-box">
                            <img src={authorData.pictureUrl} alt="author" />
                        </div>

                        <div className="author-info">
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

                        <div className="Clear"></div>

                        <hr />

                        <div className="author-books">
                            <h3>Popular books of <span>{authorData.name}</span></h3>

                            {
                                authorData.books != null ?

                                    authorData.books.map((item) => (
                                        <BookCard
                                            key={item.id}
                                            BookTitle={item.bookTitle}
                                            AuthorName={item.author != null ? item.author.name : null}
                                            src={item.bookCover}
                                            page={`/genre/${item.genreId}/books/${item.id}`}
                                        />
                                    ))
                                    :
                                    null
                            }

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

export default AuthorInfo;