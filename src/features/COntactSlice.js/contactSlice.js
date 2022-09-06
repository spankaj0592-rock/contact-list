import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("users/getUser", async () =>{   
   try {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data;
   } catch (error) {
    console.log(error)
   }
   

})
console.log(getUser.data);

const userSlice = createSlice({
    name:"users",
    initialState:
    {    
     data: [],
    isSuccess:false,
    loading:false,
    },

extraReducers:{
 [getUser.pending]:(state,action)=>{
    state.loading=true;
 },
   
 [getUser.fulfilled]:(state,action)=>{
    state.loading=false;
    state.data =action.payload;
 },

 [getUser.rejected]:(state,action)=>{
    state.loading=false;
 },
}

})



export default userSlice.reducer