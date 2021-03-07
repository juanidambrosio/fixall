import React, { useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { useSelector, useDispatch } from 'react-redux';
import { addMessages, getMessages } from '../../store/actions/messages';

const ChatScreen = props => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.messages.messages);

    useEffect(() => {
        dispatch(getMessages());
    }, [dispatch])

    const onSend = useCallback((newMessages = []) => {
        GiftedChat.append(messages, newMessages);
        dispatch(addMessages(newMessages));
    }, [dispatch])

    return (
        <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            inverted={false}
        />
    )
}

export default ChatScreen;