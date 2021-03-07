import React from 'react';
import TabNavigator from './navigation/Navigator';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { servicesReducer, messagesReducer } from './store/reducers';
import thunk from 'redux-thunk';

export default function App() {
  const rootReducer = combineReducers({
    services: servicesReducer,
    messages: messagesReducer
  })
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <TabNavigator />
    </Provider>
  )
};
