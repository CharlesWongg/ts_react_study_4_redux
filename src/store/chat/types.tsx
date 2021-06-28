import { SEND_MESSAGE, DELETE_MESSAGE } from './constants'

export type Message = {
    user: string;
    message: string;
    timestamp: number;
}

export interface ChatState {
    messages: Message[]
}

export interface SendMessageAction {
    type: SEND_MESSAGE;
    payload?: Message;
}

export interface DeleteMessageAction {
    type: DELETE_MESSAGE;
    meta: {
        timestamp: number,
    };
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction