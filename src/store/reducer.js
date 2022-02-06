import { combineReducers } from "redux";
import bugReducer from './bug';
import projectReducer from './project';
import userReducer from "./users";

export const reducer = combineReducers({
    bugs:  bugReducer,
    projects: projectReducer,
    users: userReducer
})