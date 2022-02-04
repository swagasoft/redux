
import { createAction, createReducer } from "@reduxjs/toolkit";

const action = createAction("bugUpdated");
console.log(action(1))


// Actions Creator
export  const bugAdded =  createAction('bugAdded');
export const bugResolved =  createAction("bugResolved");
export const bugRemoved =  createAction("bugRemoved");


// Reducer
let lastId = 0;


export default createReducer([], {
    // key: value
    // actions :  function (event =>  event handler)
    [bugAdded.type]: (bugs, action) => {
        bugs.push( {
            id : ++lastId,
            description: action.payload.description,
            resolved: false
        })

    },

    [bugResolved.type]: (bugs, action)=> {
      const index =  bugs.findIndex(bug => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    
    [bugRemoved.type]: (bugs, action)=> {
        return bugs.filter(bug => bug.id !== action.payload.id)
    }
})



