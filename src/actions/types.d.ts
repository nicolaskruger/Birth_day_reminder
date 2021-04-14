import { type } from "node:os";
import { IPeople } from "../app/People";
import { ActionTypes } from "./actionTypes";

type PeopleState = {
    peoples: IPeople[]
};

type PeopleAction = {
    type: ActionTypes
}

type DispatchType = (args: PeopleAction) => PeopleAction