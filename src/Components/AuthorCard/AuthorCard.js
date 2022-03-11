import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './AuthorCardStyle.css';

const AuthorCard = ({ data }) => {

    const { Dark } = useSelector((state) => state.Theme);

    return (
        <div className={Dark ? "AuthorCard" : "AuthorCard light"} >
            <div className="cardHeader">
                <img src={data.pictureUrl} alt={data.name} />
            </div>

            <h4>
                {data.name}
            </h4>

            {
                data.bio.length > 95 ?
                    <p>
                        {data.bio.substring(0, 95) + "..."}
                    </p>
                    :
                    <p>
                        {data.bio}
                    </p>
            }

            <span>{data.dateOfBirth.substring(0, 4)}</span>
            {
                (data.dateOfDeath !== null && data.dateOfDeath.substring(0, 4) !== "0001") &&
                <span> - {data.dateOfDeath.substring(0, 4)}</span>
            }
            <Link className="link" to={`/Authors/${data.id}`}><button className="getMore">Get More</button></Link>
        </div>

    );
}

export default AuthorCard;