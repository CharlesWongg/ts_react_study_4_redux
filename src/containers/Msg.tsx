import {  Dispatch } from 'react'
import { connect } from 'react-redux'
import { StoreState } from '../store'
import Msg from '../components/Msg'
import * as chatActionns from '../store/chat/types'
import { sendMessage } from '../store/chat/actions'

export function mapStateToProps({
  chat: { messages },
}: StoreState) {
  return {
    messages,
  }
}

export function mapDispatchToProps(
  dispatch: Dispatch<chatActionns.SendMessageAction>,
) {
  return {
    sendMsg: (msg: chatActionns.Message) => dispatch(sendMessage(msg)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Msg);
