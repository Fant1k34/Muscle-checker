const baseSelector = (state: any) => state.featureLoginReducer;

export const loginStateSelector = (state: any) =>
    baseSelector(state).loginState;

export const loginExceptionSelector = (state: any) =>
    baseSelector(state).errorComment;
