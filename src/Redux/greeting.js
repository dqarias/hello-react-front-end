import { createSlice } from "@reduxjs/toolkit";
import fetchGreeting from "../Services/greetingAPI";

const initialState = {
    greetings: [],
    status: '',
}

const greetingSlice = createSlice({
    name: 'Greeting',
    initialState,
    extraReducers: {
        [fetchGreeting.pending]: (state) => ({
            ...state,
            status: 'loading',
          }),
          [fetchGreeting.fulfilled]: (state, action) => ({
            ...state,
            greetings: action.payload,
            status: 'uploaded',
          }),
          [fetchGreeting.rejected]: (state) => ({
            ...state,
            status: 'failed',
          }),
    }
})

export default greetingSlice.reducer;