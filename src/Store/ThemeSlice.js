import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
    name: "Theme",
    initialState: { Dark: localStorage.getItem("theme") === "light" ? false : true },
    reducers: {
        ChangeTheme: (state) => {
            state.Dark = !state.Dark;
            localStorage.setItem("theme", state.Dark ? "dark" : "light");
        }
    }
});

export const { ChangeTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;