import { ActionTypes, EnumDictionary } from "../actions/actionTypes";
import { PeopleAction, PeopleState } from "../actions/types";
import { inithialState } from "./inithialStatete";

const clear = (state: PeopleState, action: PeopleAction): PeopleState => ({
    ...state,
    peoples: []
});

const stateMachine: EnumDictionary<ActionTypes, (state: PeopleState, action: PeopleAction) => PeopleState> = {
    [ActionTypes.CLEAR]: clear
}
const def = (state: PeopleState, action: PeopleAction) => {
    return {
        ...state
    }
}

const peopleReducer = (
    state: PeopleState = inithialState,
    action: PeopleAction
) => {
    const func = stateMachine[action.type] || def
    return func(state, action);
}

export { peopleReducer }