import React, { useState } from 'react';
import './CreateCommentStyle.css';
import Rating from '@material-ui/lab/Rating';
import SendIcon from '@material-ui/icons/Send';
import Alert from '@material-ui/lab/Alert';
import DataServices from '../API/DataServices/DataServices';

const CreateComment = ({ content }) => {

    const [writeReview, setWriteReview] = useState(false);
    const [successAlert, setSuccessAlert] = useState(false);
    const [reviewerName, setReviewerName] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [rate, setRate] = useState(5);

    const handleSubmit = (event) => {
        event.preventDefault();
        setWriteReview(false);
        setSuccessAlert(true);
        DataServices.CreateCommentToPost(content.genre.id, content.id, reviewerName, email, description, Number(rate));
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
                    : null
            }

            {
                writeReview ?
                    <>
                        <h2>Review the book</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" onChange={(value) => setReviewerName(value.target.value)} value={reviewerName} required />
                            <input type="email" placeholder="Email address" onChange={(value) => setEmail(value.target.value)} value={email} required />

                            <span className="span">Book rate</span>

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

                            <textarea placeholder="Write Your Review" onChange={(value) => setDescription(value.target.value)} value={description} required />

                            <button className="SendButton"><SendIcon className="AddIcon" /></button>
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