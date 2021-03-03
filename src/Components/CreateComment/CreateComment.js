import React, { useState } from 'react';
import './CreateCommentStyle.css';
import Rating from '@material-ui/lab/Rating';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

const CreateComment = () => {

    const [writeReview, setWriteReview] = useState(false);

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
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email address"/>

                    <span className="span">Book rate</span>

                    <Rating
                    className="rating"
                    name="simple-controlled"
                    size="small"
                    defaultValue={.5}
                    precision={0.5} 
                    />

                    <textarea placeholder="Write Your Review"/>
                    
                    <Tooltip className="Tooltip" title="Add" aria-label="add">
                        <Fab className="Fab" color="primary">
                            <SendIcon className="AddIcon"/>
                        </Fab>
                    </Tooltip>
                </> 
                :
                null
            }

            <div className="Clear"></div>

            

        </div>
    );
}

export default CreateComment;