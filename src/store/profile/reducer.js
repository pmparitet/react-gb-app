import { TOGGLE_CHANGE_ACTION } from './actions';

export const profileInitialState = {
    toggle_status: false,
};

export const profileReducer = (state = profileInitialState, action) => {
    switch (action.type) {
        case TOGGLE_CHANGE_ACTION:
            return {
                ...state,
                toggle_status: !state.toggle_status,
            };
        default:
            return state;
    }
};
