import { combineReducers } from "redux";
import { kidReducer } from "./kid.reducer";


export const routeREducer = combineReducers({
    kidData :  kidReducer
})