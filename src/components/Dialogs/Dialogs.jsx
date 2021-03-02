import Dialog from './Dialog/Dialog.jsx';
import s from './Dialogs.module.css'
import Message from './Message/Message.jsx';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>    
                {dialogsData.map((item) => <Dialog userName={item.userName} id = {item.id}/>)}
            </div>

            <div className={s.messagesItems}>
                {messageData.map((item) => <Message messageText={item.messageText} />)}
            </div>
        </div>
    )
}

let dialogsData = [
    { id: 0, userName: 'Vova' },
    { id: 1, userName: 'Vasyl' },
    { id: 2, userName: 'Ivan' }
]

let messageData = [
    {messageText : 'Hi'},
    {messageText : 'Shakal'},
    {messageText : 'WTF'}

]
export default Dialogs;