import {
    ChatState, ChatActionTypes
} from './types'
import { SEND_MESSAGE } from './constants'

const initialState: ChatState = {
    messages: [{
        user: 'Ben',
        message: 'Hello World!',
        timestamp: 123123123,        
    }]
}

export function chatReducer(
    state = initialState,
    action: ChatActionTypes
): ChatState {
    switch(action.type) {
        case SEND_MESSAGE:
            const msgs = Array.prototype.concat.call(state.messages)
            msgs.push(action.payload)
            return Object.assign({}, state , { messages: msgs })
        default:
            return { ...state }
    }
}