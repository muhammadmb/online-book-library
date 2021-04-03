import React from 'react';
import './ReviewsStyle.css';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Reviews = ({ content }) => {

    let name = content.reviewerName;
    const theme = localStorage.getItem("theme");

    return (
        <div className="Reviews">
            <Avatar
                className="avatar"
                sizes="large"
            >
                {name.substr(0, 1).toUpperCase()}
            </Avatar>

            <h5
                className={theme === 'light' ? "reviwer light" : "reviwer"}
            >
                {name}
            </h5>

            <Rating
                className="ratingStarts"
                name="hover-feedback"
                size="small"
                precision={1}
                value={content.bookRate}
                readOnly
            />

            <span className="date">{content.date != null ? content.date : null}</span>

            <p className={theme === 'light' ? "light" : ""}>
                {content.reviewDescription}
            </p>

            <div className="voting">

                <button className="vote">
                    <ExpandLessIcon className="icon" />
                </button>

                <span className={theme === 'light' ? "counter light" : "counter"}>{content.upVote}</span>

            </div>

            <div className="voting">

                <button className="vote">
                    <ExpandMoreIcon className="icon" />
                </button>

                <span className={theme === 'light' ? "counter light" : "counter"}>{content.downVote}</span>

            </div>

            <div className="Clear"></div>

        </div>
    );
}

export default Reviews;