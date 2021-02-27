import { ADD_SERVICE, GET_SERVICES } from '../actions/services';

const initialState = {
    services: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_SERVICE:
            return {
                ...state,
                services: state.services.concat(action.service)
            };
        case GET_SERVICES:
            return {
                ...state,
                services: action.services
            }
    }

    return state;
};
