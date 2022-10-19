import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchGreeting = createAsyncThunk('Greeting/fetchGreeting', async() => {
    const response = await axios
    .get('http://127.0.0.1:3000/api/v1/greetings')
    .then((response)=>{
        return response.data.message})
    return response
    
    
})

export default fetchGreeting;