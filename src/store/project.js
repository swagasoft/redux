import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
    name:"project",
    initialState:[],
    reducers:{
        //  sction => action handler
        projectAdded: (state, action)=> {
            state.push({
                id:++lastId,
                name:action.payload.name
            })
        }
    }
});

export const {projectAdded} = slice.actions;
const projectReducer = slice.reducer;
export default projectReducer;