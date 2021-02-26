import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeCardStyle.css';

const MiniCard = (props) => {

    const [inHover, setHover] = useState(false);

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
                            <Link to="/bookInfo"><button>Get More</button></Link>
                        </div>

                    </div>
                </div>
            }

        </div>

    );
}
export default MiniCard;