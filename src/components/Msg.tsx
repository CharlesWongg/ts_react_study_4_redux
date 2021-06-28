import React, { ChangeEvent } from 'react'

type Message = {
    user: string,
    message: string,
    timestamp: number,
}

interface Props {
    messages: Message[];
    sendMsg: (msg: Message) => void;
}

interface State {
    msg: string;
}

export default class Msg extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            msg: '',
        }
    }

    onChangeMsg(e: ChangeEvent) {
        const $input = e.target as HTMLInputElement
        const val = $input.value
        this.setState({
            msg: val
        })
    }

    render() {
        const { messages, sendMsg } = this.props
        const { msg } = this.state
        return (<>
            <h4>messages:</h4>
            <input type="text" name="msg" value={msg} onChange={this.onChangeMsg.bind(this)}/>
            <button onClick={() => {
                sendMsg({
                    user: 'Kity',
                    message: msg || 'I am Kity',
                    timestamp: new Date().getTime(),
                })                
            }}>send msg</button>
            {messages.length && messages.map(({ message, user }, i) => (<p key={i}>
            <span>{user}: {message}</span>
            </p>))}
        </>)
    }
}