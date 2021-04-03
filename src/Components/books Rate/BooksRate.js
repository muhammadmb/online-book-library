import React from 'react';
import './BooksRateStyle.css';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const BooksRate = ({ rates }) => {

    const theme = localStorage.getItem("theme");

    return (
        <div className="container">
            <h3 className={theme === 'light' ? "ReadersReviewsHeader light" : "ReadersReviewsHeader"}>Readers Reviews</h3>
            <div className="reviewsRating">

                <Box
                    className="rating"
                    borderColor="transparent"
                >
                    <Rating
                        className="ratingStarts"
                        name="hover-feedback"
                        value={5}
                        readOnly
                    />
                    <div className="ratingRatio">
                        {
                            rates != null ?
                                <span style={{ width: `${(rates.fiveStarsRate / rates.reviewsCount) * 100}%` }}></span>
                                :
                                <span></span>
                        }

                    </div>
                </Box>

                <Box
                    className="rating"
                    borderColor="transparent"
                >
                    <Rating
                        className="ratingStarts"
                        name="hover-feedback"
                        value={4}
                        readOnly
                    />
                    <div className="ratingRatio">
                        {
                            rates != null ?
                                <span style={{ width: `${(rates.fourStarsRate / rates.reviewsCount) * 100}%` }}></span>
                                :
                                <span></span>
                        }

                    </div>
                </Box>

                <Box
                    className="rating"
                    borderColor="transparent"
                >
                    <Rating
                        className="ratingStarts"
                        name="hover-feedback"
                        value={3}
                        readOnly
                    />
                    <div className="ratingRatio">
                        {
                            rates != null ?
                                <span style={{ width: `${(rates.threeStarsRate / rates.reviewsCount) * 100}%` }}></span>
                                :
                                <span></span>
                        }

                    </div>
                </Box>

                <Box
                    className="rating"
                    borderColor="transparent"
                >
                    <Rating
                        className="ratingStarts"
                        name="hover-feedback"
                        value={2}
                        readOnly
                    />

                    <div className="ratingRatio">
                        {
                            rates != null ?
                                <span style={{ width: `${(rates.twoStarsRate / rates.reviewsCount) * 100}%` }}></span>
                                :
                                <span></span>
                        }

                    </div>
                </Box>

                <Box
                    className="rating"
                    borderColor="transparent"
                >
                    <Rating
                        className="ratingStarts"
                        name="hover-feedback"
                        value={1}
                        readOnly
                    />
                    <div className="ratingRatio">
                        {
                            rates != null ?
                                <span style={{ width: `${(rates.oneStarRate / rates.reviewsCount) * 100}%` }}></span>
                                :
                                <span></span>
                        }
                    </div>
                </Box>

            </div>

            <div
                className={theme === 'light' ? "reviewsStatistics light" : "reviewsStatistics"}
            >
                <span>
                    {rates != null ? Number(rates.bookRate).toFixed(2) : 0}
                </span>
                <span>
                    Average from {rates != null ? rates.reviewsCount : 0} Reviews
                </span>
                <Box
                    className="rating"
                    borderColor="transparent"
                >
                    <Rating
                        className="ratingStarts"
                        precision={.1}
                        name="hover-feedback"
                        size="large"
                        value={rates != null ? rates.bookRate : 0}
                        readOnly
                    />
                </Box>
            </div>
            <div className="Clear"></div>

        </div>
    );

}
export default BooksRate;