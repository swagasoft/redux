// import { createStore } from "redux";
// import reducer from "./bug";
import {reducer} from "./reducer";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore, combineReducers } from "@reduxjs/toolkit";


export default function (){
    return configureStore({reducer});
}