import React, { useState } from 'react';
import './CreateCommentStyle.css';
import Rating from '@material-ui/lab/Rating';
import SendIcon from '@material-ui/icons/Send';

const CreateComment = () => {

    const [writeReview, setWriteReview] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("DONE");
    }

    return (
        <div className="CreateComment">

            {
                !writeReview ?
                <div className="buttonDiv">
                    <button className="ReviewButton" onClick = {() => setWriteReview(!writeReview)}>Write Review</button>
                </div>
                :
                null
            }

            {
                writeReview ?
                <>
                    <h2>Review the book</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" required/>
                        <input type="email" placeholder="Email address" required/>

                        <span className="span">Book rate</span>

                        <Rating
                        className="rating"
                        name="simple-controlled"
                        size="small"
                        defaultValue={.5}
                        precision={0.5}
                        required
                        />

                        <textarea placeholder="Write Your Review" required/>
                        
                        <button className="SendButton"><SendIcon className="AddIcon"/></button>
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