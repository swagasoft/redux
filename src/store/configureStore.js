// import { createStore } from "redux";
// import reducer from "./bug";
import {reducer} from "./reducer";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import func from "./middleware/func";
import toast from "./middleware/toast";


export default function (){
    return configureStore({
        reducer,
        ...getDefaultMiddleware,
        middleware:[toast, logger("login console"),func,  ]
        
    });
}