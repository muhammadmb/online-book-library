import React, { useState } from 'react';
import './ReviewCardStyle.css';
import Avatar from '@material-ui/core/Avatar';
import Rating from '@material-ui/lab/Rating';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DataServices from '../../../API/DataServices/DataServices';
import { useSelector } from 'react-redux';

const ReviewCard = ({ content, genreId }) => {
    let name = content.reviewerName;
    const [upVote, setUpVote] = useState(content.upVote);
    const [downVote, setDownVote] = useState(content.downVote);
    const [upVoteActive, setUpVoteActive] = useState(localStorage.getItem(`voteUp${content.id}`) === 'true' ? true : false);
    const [downVoteActive, setDownVoteActive] = useState(localStorage.getItem(`voteDown${content.id}`) === 'true' ? true : false);
    const { Dark } = useSelector((state) => state.Theme);

    const handelUpVote = async () => {
        if (localStorage.getItem(`voteDown${content.id}`) === 'true') {
            await handelUnDownVote();
        }
        setUpVote(upVote + 1);
        localStorage.setItem(`voteUp${content.id}`, true);
        setUpVoteActive(true)
        await DataServices.UpdateVote(genreId, content.bookId, content.id, upVote + 1, "upVote");
    }

    const handelUnUpVote = async () => {
        setUpVote(upVote - 1);
        setUpVoteActive(false)
        localStorage.setItem(`voteUp${content.id}`, false);
        await DataServices.UpdateVote(genreId, content.bookId, content.id, upVote - 1, "upVote");
    }

    const handelDownVote = async () => {
        if (localStorage.getItem(`voteUp${content.id}`) === 'true') {
            await handelUnUpVote();
        }
        setDownVote(downVote + 1);
        setDownVoteActive(true)
        localStorage.setItem(`voteDown${content.id}`, true);
        await DataServices.UpdateVote(genreId, content.bookId, content.id, downVote + 1, "downVote");
    }

    const handelUnDownVote = async () => {
        setDownVote(downVote - 1);
        setDownVoteActive(false)
        localStorage.setItem(`voteDown${content.id}`, false);
        await DataServices.UpdateVote(genreId, content.bookId, content.id, downVote - 1, "downVote");
    }

    return (
        <>
            <div className={Dark ? "review-card" : "review-card light"}>

                <div className="info">
                    <Avatar
                        className="avatar"
                    >
                        {name.substr(0, 1).toUpperCase()}
                    </Avatar>

                    <div className="reviwer-data">
                        <h5
                            long={name.length > 10 ? "true" : "false"}
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
                        <span className="date">{content.addedDate != null ? content.addedDate.substr(0, 10) : null}</span>
                    </div>
                </div>

                <p>
                    {content.reviewDescription}
                </p>

                <div className="voting">
                    <button className="vote">
                        <ExpandLessIcon
                            className=
                            {
                                upVoteActive ?
                                    "icon active"
                                    :
                                    "icon"
                            }
                            onClick=
                            {
                                () =>
                                    upVoteActive ?
                                        handelUnUpVote()
                                        :
                                        handelUpVote()
                            }
                        />
                        <span className="counter">{upVote}</span>
                    </button>

                    <button className="vote">
                        <ExpandMoreIcon className=
                            {
                                downVoteActive ?
                                    "icon active"
                                    :
                                    "icon"
                            }
                            onClick=
                            {
                                () =>
                                    downVoteActive ?
                                        handelUnDownVote()
                                        :
                                        handelDownVote()
                            }
                        />
                        <span className="counter">{downVote}</span>
                    </button>
                </div>
            </div>
            <hr />
        </>

    );
}

export default ReviewCard;