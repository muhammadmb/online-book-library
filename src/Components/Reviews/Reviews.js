import React from 'react';
import './ReviewsStyle.css';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Reviews = () =>{

    let name = "Muhammad";

    return (
        <div className="Reviews">
            <Avatar className="avatar" sizes="large">{name.substr(0,1)}</Avatar>
            <h5>{name}</h5>
            <Rating className="ratingStarts" name="hover-feedback" size="small" precision={0.5} value={1.5} readOnly/>
            <span className="date">11/8/2020</span>

            <div className="Clear"></div>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet mollis tortor eu porttitor. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer eu suscipit velit. Aenean at vulputate ipsum. Phasellus vel risus non lectus mattis cursus. Praesent quis quam dolor. Pellentesque viverra neque sed sodales efficitur.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet mollis tortor eu porttitor. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer eu suscipit velit. Aenean at vulputate ipsum. Phasellus vel risus non lectus mattis cursus. Praesent quis quam dolor. Pellentesque viverra neque sed sodales efficitur.
            </p>
            <div className="voting">
                <button className="vote">
                    <ExpandLessIcon className="icon"/>
                </button>
                <span className="counter">0</span>
            </div>

            <div className="voting">
                <button className="vote">
                    <ExpandMoreIcon className="icon"/>
                </button>
                <span className="counter">0</span>
            </div>
            
            <div className="Clear"></div>

        </div>
    );
}

export default Reviews;