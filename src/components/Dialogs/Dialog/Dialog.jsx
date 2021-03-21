import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <div>
                <img className={s.friendImg} src={props.imgSrc}></img>
            </div>
            <div className={s.friendNav}>
                <NavLink className={s.dialogInfo} to={"/dialogs/" + props.id}>{props.userName}</NavLink>
            </div>
        </div>
    )
}

export default Dialog;