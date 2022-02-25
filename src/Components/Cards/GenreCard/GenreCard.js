import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './GenreCardStyle.css';

const GenreCard = (props) => {

    const { Dark } = useSelector((state) => state.Theme);

    return (
        <Link to={`/genre/${props.data.id}`} className={Dark ? 'genre-card' : 'genre-card light'}>
            <h1>{props.data.genreName}</h1>
            <div className="genre-img">
                <img src={props.data.picUrl} alt={props.data.genreName} />
            </div>
        </Link>
    )
}

export default GenreCard;