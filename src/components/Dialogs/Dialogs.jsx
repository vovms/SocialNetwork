import Dialog from './Dialog/Dialog.jsx';
import s from './Dialogs.module.css'
import Message from './Message/Message.jsx';
import React from 'react';
import { UpdateMessageTextActionCreator, SendMessageActionCreator } from "./../../redux/dialogs-reduser";

const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let updateMessageText = () => {
        let text = newMessageElement.current.value;
        props.dispatch(UpdateMessageTextActionCreator(text));//updateMessageText(text);
    }

    let onButtonClick = () => {
        props.dispatch(SendMessageActionCreator());// sendMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.DialogsData.userData.map((item) => <Dialog userName={item.userName} id={item.id} imgSrc={item.imgSrc} />)}
            </div>
            <div className={s.MessagesBlock}>
                <div className={s.messagesItems}>
                    {props.DialogsData.messageData.map((item) => <Message messageText={item.messageText} />)}
                </div>
                <div className={s.messagesCommandPannel}>
                    <textarea onChange={updateMessageText} ref={newMessageElement} value={props.DialogsData.currMessageText}></textarea>
                    <button onClick={onButtonClick}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;