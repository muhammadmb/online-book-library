import React, { useEffect, useState } from 'react';
import './ReviewsStyle.css';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../Store/ReviewSlice';
import LoadingAnimation from '../Loading/LoadingAnimation/LoadingAnimation';
import ReviewCard from '../Cards/ReviewCard/ReviewCard';

const Reviews = ({ genreId, bookId }) => {

    const Dispatch = useDispatch();
    const { reviews, headers } = useSelector((state) => state.Review);
    const [reviewPageNumber, setReviewPageNumber] = useState(1);
    const xPagination = headers["x-pagination"] !== undefined ? JSON.parse(headers["x-pagination"]) : {};

    useEffect(() => {
        Dispatch(getReviews({
            genreId,
            bookId,
            fields: "addedDate, bookRate, upVote, downVote, reviewerName, reviewDescription, id, bookId",
            pageNumber: reviewPageNumber,
            pageSize: 2
        }));
    }, [Dispatch, genreId, bookId, reviewPageNumber]);

    return (
        <>
            {
                reviews.length !== 0 ?
                    reviews.map((item) => (
                        <div key={item.id}>
                            <ReviewCard content={item} genreId={genreId} />
                        </div>
                    ))
                    :
                    <LoadingAnimation />
            }

            <div className='nav-buttons'>
                <button
                    className='nav-btn previous'
                    onClick={() => setReviewPageNumber(reviewPageNumber - 1)}
                    disabled={!xPagination.hasPrevious}
                >
                    Previous
                </button>

                <button
                    className='nav-btn next'
                    onClick={() => setReviewPageNumber(reviewPageNumber + 1)}
                    disabled={!xPagination.hasNext}
                >
                    Next
                </button>
            </div>
        </>


    );
}

export default Reviews;