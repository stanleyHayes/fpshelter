import {configureStore} from "@reduxjs/toolkit";

import uiReducer from "./../features/ui/ui-slice";
import petsReducer from "./../features/pets/pets-slice";
import categoriesReducer from "../features/categories/categories-slice";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        categories: categoriesReducer,
        pets: petsReducer,
    },
    devTools: true
});

export default store;