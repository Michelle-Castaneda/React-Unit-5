import { createSlice } from "@reduxjs/toolkit";

export const potentialCountriesSlice = createSlice ({
    name: 'potentialCountries',
    initialState: {
        value: [
            {
            name: {
                common: 'America',
            },
        },
    ],
    },
    reducers: {
        setPotentialCountries: (state, action) => {
            state.value = action.payload;
        },
        deletePotentialCountries: (state) => {
            state.value = null;
        }
    }
});

export const { setPotentialCountries, deletePotentialCountries } = 
potentialCountriesSlice.actions;

//This function defines how to read the state of potentialCountries
export const selectPotentials = (state) => state.potentialCountries.value;

//The reducer from potentialCountriesSlice is created by the “createSlice” method from “@reduxjs/toolkit”.
export default potentialCountriesSlice.reducer;

