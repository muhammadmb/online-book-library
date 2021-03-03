import React from 'react';
import './BooksRateStyle.css';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const BooksRate = () =>{

    return(
        <div className="container">
            <h3 className="ReadersReviewsHeader">Readers Reviews</h3>
            <div className="reviewsRating">
                    
                <Box className="rating" borderColor="transparent">
                    <Rating className="ratingStarts" name="hover-feedback" value={5} readOnly/>
                    <div className="ratingRatio">
                        <span style={{width:"25%"}}></span>
                    </div>
                </Box>

                <Box className="rating" borderColor="transparent">
                    <Rating className="ratingStarts" name="hover-feedback" value={4} readOnly/>
                    <div className="ratingRatio">
                        <span style={{width:"20%"}}></span>
                    </div>
                </Box>

                <Box className="rating" borderColor="transparent">
                    <Rating className="ratingStarts" name="hover-feedback" value={3} readOnly/>
                    <div className="ratingRatio">
                        <span style={{width:"40%"}}></span>
                    </div>
                </Box>

                <Box className="rating" borderColor="transparent">
                    <Rating className="ratingStarts" name="hover-feedback" value={2} readOnly/>
                    <div className="ratingRatio">
                        <span style={{width:"5%"}}></span>
                    </div>
                </Box>

                <Box className="rating" borderColor="transparent">
                    <Rating className="ratingStarts" name="hover-feedback" value={1} readOnly/>
                    <div className="ratingRatio">
                        <span style={{width:"10%"}}></span>
                    </div>
                </Box>

            </div>

            <div className="reviewsStatistics">
                <span>0</span>
                <span>Average from 0 Reviews</span>
                <Box className="rating" borderColor="transparent">
                    <Rating className="ratingStarts" precision={0.5} name="hover-feedback" size="large" value={0} readOnly/>
                </Box>
            </div>
            <div className="Clear"></div>
            
        </div>
    );

}
export default BooksRate;