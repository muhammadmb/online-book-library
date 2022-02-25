import React from 'react';
import { useSelector } from "react-redux";
import './BookCardStyle.css';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const BookCard = (props) => {

    const url = `/${`genre/${props.data.genre.id}/books/${props.data.id}`}`;
    const { Dark } = useSelector((state) => state.Theme);

    return (
        <Link to={url} className={Dark ? "book-card" : "book-card light"}>
            <div className='card-container'>
                <div className='img-div'>
                    <img src={props.data.bookCover} alt={props.data.bookTitle} />
                </div>

                <div className="card-info">
                    {
                        props.data.bookTitle &&
                        <h2>{props.data.bookTitle.length <= 30 ? props.data.bookTitle : props.data.bookTitle.substring(0, 30) + '...'}</h2>
                    }

                    {
                        props.data.author &&
                        <span className='author'>{props.data.author.name}</span>
                    }

                    {
                        props.data.bookRating &&
                        <Box
                            className="rating"
                            borderColor="transparent"
                        >
                            <Rating
                                name="hover-feedback"
                                precision={1}
                                value={props.data.bookRating.bookRate}
                                readOnly
                            />
                        </Box>
                    }

                </div>
            </div>
        </Link>

    );
}
export default BookCard;