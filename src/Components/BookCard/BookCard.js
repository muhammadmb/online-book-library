import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './BookCardStyle.css';
const BookCard = (props) => {
  
    const [hover, setHover] = useState(false);

    return(
        <div className="BookCard">
            <div className={hover? "imgHoveresDiv" : "imgDiv"}  onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                <img src = {props.src} alt={props.BookTitle} title={props.BookTitle}/>
            </div>

            {
                hover?
                <div className="hover" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
                    <img className="hoverImg" src = {props.src} alt={props.BookTitle} title={props.BookTitle}/>
                    <h4>{props.BookTitle}</h4>
                    <span>by {props.AuthorName}</span>
                    <Link to="/"><button className="btn btn-primary">More details</button></Link>
                </div>
                :
                null
            }
            <div className="Clear"></div>
        </div>
    );
}

export default BookCard;
