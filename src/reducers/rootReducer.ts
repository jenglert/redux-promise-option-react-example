import { combineReducers } from "redux";
import { randomDogReducer } from "./randomDogReducer";

const rootReducer = combineReducers({
    'randomDog': randomDogReducer,
})

export default rootReducer;