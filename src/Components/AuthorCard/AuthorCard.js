import React from 'react';
import { Link } from 'react-router-dom';
import './AuthorCardStyle.css';


const AuthorCard = (props) =>{
    return (
        <div className="AuthorCard">
            <div className="imageDiv">
                <img src= {props.src}/>
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
            <Link className="link" to="/"><button className="getMore">Get More</button></Link>
        </div>
        
    );
}

export default AuthorCard;