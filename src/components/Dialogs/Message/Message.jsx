import s from './Message.module.css';

const Message = (props) => {
    return(
        <div>
            {props.messageText}
        </div>
    )
}

export default Message;