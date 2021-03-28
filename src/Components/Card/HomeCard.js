import React, { useState } from 'react';
import './HomeCardStyle.css';
import { Link } from 'react-router-dom';

const MiniCard = (props) => {

    const [inHover, setHover] = useState(false);
    const url = `/${props.page}`;

    return (
        <div className="HomeCard">
            <div
                onMouseEnter={() => setHover(true)}
                className="box">
                <img className={inHover ? "imageHoverd" : ""} src={props.cover} alt={props.name} />
            </div>
            {
                inHover &&
                <div className="box"
                    onMouseLeave={() => setHover(false)}
                >
                    <div className="afterHover">
                        <div className="hoverContent">
                            <h5>{props.name}</h5>
                            <Link to={url}><button>Get More</button></Link>
                        </div>
                    </div>
                </div>
            }

        </div>

    );
}
export default MiniCard;