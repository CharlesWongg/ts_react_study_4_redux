import { createStore, combineReducers } from 'redux';
import enhancers from './enhancers'
import { chatReducer } from './chat/reducers'
import { ChatState } from './chat/types'

export interface StoreState {
    chat: ChatState;
}

const rootReducer = combineReducers({
  chat: chatReducer,
})

export const store = createStore(
    rootReducer,
    enhancers,
);

export type AppState = ReturnType<typeof rootReducer>