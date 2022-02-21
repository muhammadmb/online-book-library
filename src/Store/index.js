import { configureStore } from '@reduxjs/toolkit';
import Theme from './ThemeSlice'

export default configureStore({
    reducer: {
        Theme
    }
});