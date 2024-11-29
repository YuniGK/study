import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
    id : ''
    , password : ''
    , authenticate : false
    , isLoading : false
    , error : null
}

export const getLogin = createAsyncThunk('auth/login', async (id, password, thunkAPI)=> {
    try {
        return {authenticate : true}
    } catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
});

export const getLogOut = createAsyncThunk('auth/logout', async (_,thunkAPI)=> {
    try {
        return {authenticate : false}
    } catch (error) {
        thunkAPI.rejectWithValue(error.message);
    }
});

const authenticateSlice = createSlice({
    name : "auth"
    , initialState
    , reducers : {     
    },
    extraReducers : (builder)=>{
        builder
        .addCase(getLogin.pending, (state)=>{
            //대기
            state.isLoading = true;
        })
        .addCase(getLogin.fulfilled, (state, action)=>{
            //성공
            state.isLoading = false;
            state.authenticate = action.payload.authenticate;
        })
        .addCase(getLogin.rejected, (state, action)=>{
            //에러
            state.isLoading = false;
            state.error = action.payload;
        })

        .addCase(getLogOut.pending, (state)=>{
            //대기
            state.isLoading = true;
        })
        .addCase(getLogOut.fulfilled, (state, action)=>{
            //성공
            state.isLoading = false;
            state.authenticate = action.payload.authenticate;
        })
        .addCase(getLogOut.rejected, (state, action)=>{
            //에러
            state.isLoading = false;
            state.error = action.payload;
        })
    }
});
    
export default authenticateSlice.reducer;