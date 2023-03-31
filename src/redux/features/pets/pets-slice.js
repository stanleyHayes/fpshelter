import {createSlice} from "@reduxjs/toolkit";
import {pets} from "./pets";

const petSlice = createSlice({
    name: "pet",
    initialState: {
        pets: [...pets],
        petLoading: false,
        petError: null,
        pet: null
    },
    reducers: {
        getPet: (state, action) => {
            state.petLoading = true;
            const pets = state.pets.filter(pet => pet._id.toString() === action.payload.toString());
            if (pets.length > 0){
                state.pet = pets[0];
                state.petError = null;
            }else{
                state.petError = "Pet not found"
            }
            state.petLoading = false;
        }
    }
});

const {reducer} = petSlice;
export const PET_ACTION_CREATOR = {getPet: petSlice.actions.getPet};
export const selectPets = state => state.pets;

export default reducer;