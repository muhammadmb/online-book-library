import { configureStore } from '@reduxjs/toolkit';
import Theme from './ThemeSlice';
import Genre from './GenreSlice';
import Review from './ReviewSlice';

export default configureStore({

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        }),
    reducer: {
        Theme,
        Genre,
        Review
    }
});