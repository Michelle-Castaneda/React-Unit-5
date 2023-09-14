import { createSlice } from "@reduxjs/toolkit";
import { initialCountry } from "../../assets/initialCountry"

export const displayCountrySlice =createSlice({
    name: 'displayCountry',
    initialState: {
        value:initialCountry
    },
    reducers: {
        setDisplayCountry: (state, action) => {
            state.value=action.payload;
        },
        deleteDisplayCountry: (state) => {
            state.value=null;
        }
    }

});

export const {setDisplayCountry, deleteDisplayCountry} = displayCountrySlice.actions;

//This function defines how to read the state of displayedCountry.
export const selectDisplay = (state) => state.displayedCountry.value;

// The reducer from displayCountrySlice is created by the “createSlice” method from “@reduxjs/toolkit”
export default displayCountrySlice.reducer;