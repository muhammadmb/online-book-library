import React, { useState } from 'react';
import './HomeCardStyle.css';

const MiniBookCard = (props) => {

    const [inHover, setHover] = useState(false);

    return (
        <div className="HomeCard">
            <div
                onMouseEnter={() => setHover(true)}
                className="box">
                <img className={inHover ? "imageHoverd" : ""} src={props.cover} />
            </div>
            {
                inHover &&
                <div className="box"
                    onMouseLeave={() => setHover(false)}
                >
                    <div className="afterHover">
                        <div className="hoverContent">
                            <h5>{props.name}</h5>
                            <button>Get More</button>
                        </div>

                    </div>
                </div>
            }

        </div>

    );
}
export default MiniBookCard;