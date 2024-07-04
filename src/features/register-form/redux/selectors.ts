const baseSelector = (state: any) => state.featureRegisterReducer;

export const registerStateSelector = (state: any) =>
    baseSelector(state).registerState;

export const emailSelector = (state: any) => baseSelector(state).email;
