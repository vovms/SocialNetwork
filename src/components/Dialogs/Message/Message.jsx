import s from './Message.module.css';

const Message = (props) => {
    return(
        <div className={s.item}>
          <p>{props.messageText}</p>
        </div>
    )
}

export default Message;