import { combineReducers, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchJSON = createAsyncThunk("fetch/api", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    const { username } = res.data;
    return username;
  });

export const fetchJSON2 = createAsyncThunk("fetch/api", async () => {
const res = await axios.get("https://jsonplaceholder.typicode.com/users/");
return res.data;
});

const initialState = {
    status: 'idle',
    username: '',
    error: ''
}

const fetchSlice = createSlice({
    name: "fetchData",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJSON.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.username = action.payload;
        })
        builder.addCase(fetchJSON.rejected, (state, action) => {
            state.status = 'rejected'
            state.username = "anonymous";
        })
    }
})

export default fetchSlice.reducer
// export const rootReducer = combineReducers({fetchData: fetchSlice.reducer})
export const selectData = state => state.username