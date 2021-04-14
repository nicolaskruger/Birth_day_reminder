import { ActionTypes, EnumDictionary } from "../actions/actionTypes";
import { PeopleAction, PeopleState } from "../actions/types";
import { IPeople } from "../app/People";
import { inithialState } from "./inithialStatete";

const clear = (state: PeopleState, action: PeopleAction): PeopleState => [];

const stateMachine: EnumDictionary<ActionTypes, (state: PeopleState, action: PeopleAction) => PeopleState> = {
    [ActionTypes.CLEAR]: clear
}


const peopleReducer = (
    state: PeopleState = inithialState,
    action: PeopleAction
) => {
    return stateMachine[action.type](state, action);
}