import { ActionTypes } from "./actionTypes";
import { PeopleAction } from "./types";

export const clear: () => PeopleAction = () => {
    return {
        type: ActionTypes.CLEAR
    }
}