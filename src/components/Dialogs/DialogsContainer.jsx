import Dialogs from './Dialogs';
import { connect } from "react-redux";
// import StoreContext from '../../StoreContext'

import { UpdateMessageTextActionCreator, SendMessageActionCreator } from "./../../redux/dialogs-reduser";

let mapStateToProps = (state) => {
    return {
        DialogsData: state.Dialogs  
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
    sendNewMessage: () => {dispatch(SendMessageActionCreator())},
    updateMessageText: (text) => {dispatch(UpdateMessageTextActionCreator(text))}
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;