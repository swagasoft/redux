// import { createStore } from "redux";
import reducer from "./bug";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";


export default function (){
    return configureStore({reducer});
}