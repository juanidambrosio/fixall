import axios from '../../components/data/axios';
import Message from '../../models/Message';
import 'react-native-get-random-values';
import { v1 as uuidv1 } from 'uuid';

export const ADD_MESSAGES = 'ADD_MESSAGES';
export const GET_MESSAGES = 'GET_MESSAGES';

export const addMessages = messages => {
    return async dispatch => {
        const dispatchedMessages = [];
        await Promise.all(messages.map(message => {
            const msg = new Message(
                uuidv1(),
                message.text,
                new Date().toISOString(),
                message.user
            );
            dispatchedMessages.push(msg);
            return axios.post('/messages.json', message);
        }));

        dispatch(
            {
                type: ADD_MESSAGES,
                messages: dispatchedMessages
            });
    }
}

export const getMessages = () => {
    return async dispatch => {
        const fetchedMessages = (await axios.get('/messages.json')).data || [];
        const messages = Object.keys(fetchedMessages).map(key => fetchedMessages[key]);
        dispatch(
            {
                type: GET_MESSAGES, messages
            });
    }
}
