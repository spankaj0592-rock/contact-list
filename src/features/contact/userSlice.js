import { createSlice } from "@reduxjs/toolkit";

const initialState = {
users:[]
}

const UserSlice = createSlice({

    
    name:"user",
    initialState,
    reducers:{
        setUser:(state, action) =>{
            state.users =action.payload;
        }
    }
})



export const { setUser } =UserSlice.actions;

export const selectUsers = (state) =>state.user.users;

export default UserSlice.reducer;