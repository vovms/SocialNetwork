import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css';

const Dialog = (props) => {
    return(
        <div className={s.dialog}>
           <NavLink to = {"/dialogs/" + props.id}>{props.userName}</NavLink>
           {/* {props.userName} */}
        </div>
    )
}

export default Dialog;