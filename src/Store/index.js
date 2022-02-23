import { configureStore } from '@reduxjs/toolkit';
import Theme from './ThemeSlice'
import Genre from './GenreSlice'

export default configureStore({

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['genre/getGenres/fulfilled']
            }
        }),
    reducer: {
        Theme,
        Genre
    }
});