
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

let lastId = 0;


const slice = createSlice({
    name:"bugs",
    initialState:[],
    reducers:{


        bugAssignToUser:(bugs, action)=> {
            const {bugId, userId} = action.payload;
            const index = bugs.findIndex(bug =>  bug.id === bugId)
            bugs[index] .userId  = userId;
        },

        bugAdded:(bugs, action) => {
            bugs.push( {
                id : ++lastId,
                description: action.payload.description,
                resolved: false
            })
        },
        bugResolved:(bugs, action) => {
            const index =  bugs.findIndex(bug => bug.id === action.payload.id);
            bugs[index].resolved = true;
        },
        bugRemoved:(bugs, action) => {
            return bugs.filter(bug => bug.id !== action.payload.id)
        }
    }
});


// Selector
// export const getUnresolveBugs = state => 
//     state.bugs.filter(bug =>  !bug.resolved)


  export const getUnresolveBugs =  createSelector(
        state => state.bugs,
        state =>  state.projects,
        (bugs, projects) => bugs.filter(bug => !bug.resolved)
    )

export const getBugsByUser = userId => createSelector(
    state => state.bugs,
    bugs =>  bugs.filter(bug => bug.userId == userId)
)


export const  {bugAdded, bugResolved, bugRemoved, bugAssignToUser} = slice.actions;
const bugReducer = slice.reducer;
export default bugReducer;




