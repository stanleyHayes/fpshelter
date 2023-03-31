import {createSlice} from "@reduxjs/toolkit";
import {PF_SHELTER_CONSTANTS} from "../../../utils/constants";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: localStorage.getItem(PF_SHELTER_CONSTANTS.PF_SHELTER_THEME_VARIANT_KEY) ?
            localStorage.getItem(PF_SHELTER_CONSTANTS.PF_SHELTER_THEME_VARIANT_KEY) :
            "light",
        drawerOpen: false
    },
    reducers: {
        toggleDrawer: (state, action) => {
            state.drawerOpen = action.payload;
        },
        toggleTheme: (state) => {
            localStorage.setItem(PF_SHELTER_CONSTANTS.PF_SHELTER_THEME_VARIANT_KEY, state.theme === "light" ? "dark" : "light")
            state.theme = state.theme === "light" ? "dark" : "light";
        }
    }
});

const {reducer, actions} = uiSlice;
export const selectUI = state => state.ui;
export const UI_ACTION_CREATORS = {
    toggleDrawer: actions.toggleDrawer,
    toggleTheme: actions.toggleTheme,
};

export default reducer;