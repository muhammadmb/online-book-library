import React, { useState } from 'react';
import './ReviewsStyle.css';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DataServices from '../API/DataServices/DataServices';

const Reviews = ({ content, genreId }) => {

    let name = content.reviewerName;
    const theme = localStorage.getItem("theme");
    const [upVote, setUpVote] = useState(content.upVote);
    const [downVote, setDownVote] = useState(content.downVote);

    const handelUpVote = () => {
        if (localStorage.getItem(`voteDown${content.id}`) === 'true') {
            handelUnDownVote();
        }
        setUpVote(upVote + 1);
        localStorage.setItem(`voteUp${content.id}`, true);
        DataServices.UpdateUpVote(genreId, content.bookId, content.id, upVote + 1, "upVote");
    }

    const handelUnUpVote = () => {
        setUpVote(upVote - 1);
        localStorage.setItem(`voteUp${content.id}`, localStorage.getItem(`voteUp${content.id}`) === 'true' ? false : true);
        DataServices.UpdateUpVote(genreId, content.bookId, content.id, upVote - 1, "upVote");
    }

    const handelDownVote = () => {
        if (localStorage.getItem(`voteUp${content.id}`) === 'true') {
            handelUnUpVote();
        }
        setDownVote(downVote + 1);
        localStorage.setItem(`voteDown${content.id}`, true);
        DataServices.UpdateUpVote(genreId, content.bookId, content.id, downVote + 1, "downVote");
    }

    const handelUnDownVote = () => {
        setDownVote(downVote - 1);
        localStorage.setItem(`voteDown${content.id}`, localStorage.getItem(`voteDown${content.id}`) === 'true' ? false : true);
        DataServices.UpdateUpVote(genreId, content.bookId, content.id, downVote - 1, "downVote");
    }

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
                    <ExpandLessIcon
                        className=
                        {
                            localStorage.getItem(`voteUp${content.id}`) === 'true' ?
                                "icon active"
                                :
                                "icon"
                        }
                        onClick=
                        {
                            () =>
                                localStorage.getItem(`voteUp${content.id}`) === 'true' ?
                                    handelUnUpVote()
                                    :
                                    handelUpVote()
                        }
                    />
                </button>

                <span className={theme === 'light' ? "counter light" : "counter"}>{upVote}</span>
            </div>

            <div className="voting">

                <button className="vote">
                    <ExpandMoreIcon className=
                        {
                            localStorage.getItem(`voteDown${content.id}`) === 'true' ?
                                "icon active"
                                :
                                "icon"
                        }
                        onClick=
                        {
                            () =>
                                localStorage.getItem(`voteDown${content.id}`) === 'true' ?
                                    handelUnDownVote()
                                    :
                                    handelDownVote()
                        }
                    />
                </button>

                <span className={theme === 'light' ? "counter light" : "counter"}>{downVote}</span>

            </div>

            <div className="Clear"></div>

        </div>
    );
}

export default Reviews;