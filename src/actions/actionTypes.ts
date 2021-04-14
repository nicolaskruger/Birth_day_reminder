enum ActionTypes {
    CLEAR
}
export type EnumDictionary<T extends string | symbol | number, U> = {
    [K in T]: U;
};


export { ActionTypes }