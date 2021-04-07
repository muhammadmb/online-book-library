import React, { useState } from 'react';
import './CreateCommentStyle.css';
import Rating from '@material-ui/lab/Rating';
import SendIcon from '@material-ui/icons/Send';
import Alert from '@material-ui/lab/Alert';
import DataServices from '../API/DataServices/DataServices';

const CreateComment = (props) => {

    const [writeReview, setWriteReview] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
    const [reviewerName, setReviewerName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [reviewCounter, SetReviewCounter] = useState(0);
    const [rate, setRate] = useState(0);
    const [error, setError] = useState(false);
    const theme = localStorage.getItem("theme");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (rate != null && rate !== 0) {
            setWriteReview(false);
            setSuccessAlert(true);
            setError(false);
            DataServices.CreateCommentToPost(props.content.genre.id, props.content.id, reviewerName, email, description, Number(rate));
        } else {
            setError(true);
        }
    }

    return (
        <div className="CreateComment">

            {
                !writeReview ?
                    <div className="buttonDiv">
                        <button className="ReviewButton" onClick={() => setWriteReview(!writeReview)}>Write Review</button>
                    </div>
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
                error ?
                    <Alert className="alert" severity="error">You have to fill all field</Alert>
                    :
                    null
            }

            {
                writeReview ?
                    <>
                        <h2 className={theme === 'light' ? "light" : ""}>Review the book</h2>
                        <form onSubmit={handleSubmit}>
                            <input
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

                            <span className={theme === 'light' ? "span light" : "span"}>Book rate</span>

                            <Rating
                                className="rating"
                                name="simple-controlled"
                                size="small"
                                defaultValue={0}
                                precision={1}
                                onChange={(event, newValue) => {
                                    setRate(newValue);
                                }}
                                required
                            />
                            <div className="review-box">

                                <textarea
                                    placeholder="Write Your Review"
                                    onChange={
                                        (value) => {
                                            setDescription(value.target.value)
                                            console.log(value.target.value.length);
                                            SetReviewCounter(value.target.value.length);
                                        }}
                                    value={description}
                                    required
                                    maxLength="150"
                                />
                                <span className="lettersCounter">{reviewCounter} / 150</span>

                            </div>

                            <button className="SendButton">
                                <SendIcon className="AddIcon" />
                            </button>
                        </form>

                    </>
                    :
                    null
            }

            <div className="Clear"></div>



        </div>
    );
}

export default CreateComment;