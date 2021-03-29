import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AuthorCardStyle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AuthorCard = (props) => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    return (
        <div className="AuthorCard" data-aos="zoom-in">
            <div className="cardHeader">
                <img src={props.src} alt={props.name} />
            </div>


            <h4>
                {props.name}
            </h4>

            <p>
                {props.description}
            </p>

            <span>{props.dateOfBirth}</span>
            {
                props.dateOfDeath ?
                    <span> - {props.dateOfDeath}</span>
                    :
                    null
            }
            <Link className="link" to={props.page}><button className="getMore">Get More</button></Link>
        </div>

    );
}

export default AuthorCard;