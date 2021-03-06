import Dialog from './Dialog/Dialog.jsx';
import s from './Dialogs.module.css'
import Message from './Message/Message.jsx';

const Dialogs = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.DialogsData.userData.map((item) => <Dialog userName={item.userName} id={item.id} />)}
            </div>

            <div className={s.messagesItems}>
                {props.DialogsData.messageData.map((item) => <Message messageText={item.messageText} />)}
            </div>
        </div>
    )
}

export default Dialogs;