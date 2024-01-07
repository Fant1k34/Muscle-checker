const baseSelector = (state: any) => state.featureLoginReducer;

export const loginStateSelector = (state: any) =>
    baseSelector(state).loginState;
