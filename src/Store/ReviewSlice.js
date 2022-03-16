import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from '../API/APIConstants';

export const getReviews = createAsyncThunk(
    "reviews/getReviews",
    async (parameters, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        const { genreId, bookId, fields, pageNumber, pageSize } = parameters;
        try {
            let reviews = await axios.get(
                `${API_URL}/Genres/${genreId}/Books/${bookId}/reviews?${fields ? `fields=${fields}` : ''}${pageNumber ? `&PageNumber=${pageNumber}` : ''}${pageSize ? `&PageSize=${pageSize}` : ''}`
            );
            return reviews;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const insertReview = createAsyncThunk(
    "reviews/inserReviews",
    async (reviewData, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            await axios.post(`${API_URL}/Genres/${reviewData.genreId}/Books/${reviewData.bookId}/reviews`,
                reviewData
            )
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const ReviewSlice = createSlice({
    name: "Review",
    initialState: {
        reviews: [],
        headers: {},
        isReviewsLoading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getReviews.pending]: (state, action) => {
            state.isReviewsLoading = true;
            state.error = null;
        },
        [getReviews.fulfilled]: (state, action) => {
            state.reviews = action.payload.data;
            state.headers = action.payload.headers;
            state.isReviewsLoading = false;
        },
        [getReviews.rejected]: (state, action) => {
            state.error = action.payload;
            state.isReviewsLoading = true;
        },

        [insertReview.pending]: (state, action) => {
            state.isReviewsLoading = true;
            state.error = null;
        },
        [insertReview.fulfilled]: (state, action) => {
            const addedReview = {
                genreId: action.meta.arg.genreId,
                bookId: action.meta.arg.bookId,
                id: 1,
                bookRate: action.meta.arg.bookRate,
                email: action.meta.arg.email,
                reviewDescription: action.meta.arg.reviewDescription,
                reviewerName: action.meta.arg.reviewerName,
                upVote: 0,
                downVote: 0,
                addedDate: new Date().toLocaleDateString()
            }
            state.reviews.push(addedReview)
            state.isReviewsLoading = false;
        },
        [insertReview.rejected]: (state, action) => {
            state.error = action.payload;
            state.isReviewsLoading = true;
        }
    }
});

export default ReviewSlice.reducer;