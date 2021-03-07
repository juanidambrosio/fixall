import { ADD_MESSAGES, GET_MESSAGES } from '../actions/messages';

const initialState = {
    messages: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGES:
            return {
                ...state,
                messages: state.messages.concat(action.messages)
            };
        case GET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }
    }

    return state;
};
