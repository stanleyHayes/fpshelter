import {createSlice} from "@reduxjs/toolkit";
import {categories} from "./categories";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        categories: [...categories],
        categoryLoading: false,
        categoryError: null
    },
    reducers: {}
});

const {reducer} = categorySlice;
export const selectCategories = state => state.categories;

export default reducer;