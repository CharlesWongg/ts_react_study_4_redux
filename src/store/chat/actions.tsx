import { SEND_MESSAGE, DELETE_MESSAGE } from './constants'
import { Message } from './types'

interface SendMessage {
    type: SEND_MESSAGE;
    payload: Message;
}

export function sendMessage(newMessage: Message): SendMessage {
    return {
        type: SEND_MESSAGE,
        payload: newMessage
    }
}

export function deleteMessage(timestamp: number) {
    return {
        type: DELETE_MESSAGE,
        meta: {
            timestamp
        }
    }
}