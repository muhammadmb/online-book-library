import React, { useState } from 'react';
import './CreateCommentStyle.css';
import Rating from '@material-ui/lab/Rating';
import SendIcon from '@material-ui/icons/Send';
import Alert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { insertReview } from '../../Store/ReviewSlice';

const CreateComment = (props) => {

    const [writeReview, setWriteReview] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
    const [reviewerName, setReviewerName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [reviewCounter, SetReviewCounter] = useState(0);
    const [rate, setRate] = useState(0);
    const { error } = useSelector((state) => state.Review);
    const { Dark } = useSelector((state) => state.Theme);
    const dispatch = useDispatch();

    const close = () => {
        setTimeout(() => {
            setSuccessAlert(false)
        }, 5000)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (rate != null && rate !== 0) {
            const reviewData = {
                reviewerName,
                email,
                reviewDescription: description,
                bookRate: Number(rate),
                bookId: props.content.id,
                genreId: props.content.genre.id
            }
            dispatch(insertReview(reviewData));
            if (error === null) {
                setWriteReview(false);
                setSuccessAlert(true);
                close();
            }
        } else {

        }
    }

    return (
        <div className={Dark ? "create-comment" : "create-comment light"}>
            {
                !writeReview ?
                    <button className="review-button" onClick={() => setWriteReview(!writeReview)}>Write Review</button>
                    :
                    null
            }

            {
                successAlert ?
                    <Alert className="alert" severity="success">Your Review is published succesfuly</Alert>
                    :
                    null
            }

            {
                error === null ?
                    null
                    :
                    <Alert className="alert" severity="error">some thing went wrong</Alert>
            }

            {
                writeReview ?
                    <>
                        <h2>What you think about {props.content.bookTitle}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="rate">

                                <input
                                    autoFocus={true}
                                    type="text"
                                    placeholder="Name"
                                    onChange={(value) => setReviewerName(value.target.value)}
                                    value={reviewerName}
                                    required
                                />

                                <input
                                    type="email"
                                    placeholder="Email address"
                                    onChange={(value) => setEmail(value.target.value)}
                                    value={email}
                                    required
                                />

                                <div className="your-rate">
                                    <span className='rate-lable'>your rate</span>

                                    <Rating
                                        className="rating"
                                        name="simple-controlled"
                                        defaultValue={0}
                                        precision={1}
                                        onChange={(event, newValue) => {
                                            setRate(newValue);
                                        }}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="review-box">
                                <textarea
                                    placeholder="Write a review"
                                    onChange={
                                        (value) => {
                                            setDescription(value.target.value)
                                            SetReviewCounter(value.target.value.length);
                                        }}
                                    value={description}
                                    required
                                    maxLength="150"
                                />
                                <span className="letters-counter">{reviewCounter} / 150</span>

                                <button className="send">
                                    <SendIcon className="add-icon" />
                                </button>
                            </div>
                        </form>
                    </>
                    :
                    null
            }

        </div>
    );
}

export default CreateComment;