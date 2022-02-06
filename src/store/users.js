import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
    name:"users",
    initialState:[],
    reducers:{
        //  sction => action handler
        userAdded: (users, action)=> {
            users.push({
                id:++lastId,
                name:action.payload.name
            })
        }
    }
});

export const {userAdded} = slice.actions;
const userReducer = slice.reducer;
export default userReducer;