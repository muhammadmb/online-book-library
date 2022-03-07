import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { API_URL } from '../Components/API/APIConstants';

export const getGenres = createAsyncThunk(
    "genre/getGenres",
    async (parameters, thunkApi) => {
        const { rejectWithValue } = thunkApi;
        const { fields, PageNumber, PageSize } = parameters;
        try {
            let genres = axios.get(
                `${API_URL}/Genres?${fields ? `fields=${fields.replace(/ /g, "")}` : ""}${PageNumber ? `&PageNumber=${PageNumber}` : ''}${PageSize ? `&PageSize=${PageSize}` : ''}`
            );
            return genres;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const GenreSlice = createSlice({
    name: "Genre",
    initialState: { genres: [], headers: {}, isLoading: false, error: null },
    reducers: {},
    extraReducers: {
        [getGenres.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        [getGenres.fulfilled]: (state, action) => {
            state.genres = action.payload.data;
            state.headers = action.payload.headers;
            state.isLoading = false;
        },
        [getGenres.rejected]: (state, action) => {
            state.error = action.payload;
            state.isLoading = true;
        }
    }
});

export default GenreSlice.reducer;