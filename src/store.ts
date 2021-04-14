import { createStore } from "redux";
import { peopleReducer } from "./reducer/peopleReducer";

const store = createStore(
    peopleReducer
)

export default store;