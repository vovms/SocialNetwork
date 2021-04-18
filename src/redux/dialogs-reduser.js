import { imgSrc, imgSrcNT, imgSrcTS } from './const';

const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    userData: [
        { id: 0, userName: 'Ilon Mask', imgSrc: imgSrc },
        { id: 1, userName: 'Nikola Tesla', imgSrc: imgSrcNT },
        { id: 2, userName: 'Taras Shevchenko', imgSrc: imgSrcTS }
    ],
    messageData: [
        { id: 0, messageText: 'Hi' },
        { id: 1, messageText: 'Shakal' },
        { id: 2, messageText: 'WTF' }

    ],
    currUserId: 0,
    currMessageText: 'Type your message ...'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_MESSAGE_TEXT: {
            let newState = {...state};
            newState.currMessageText = action.currMessageText;
            return newState;
        }
        case SEND_MESSAGE: {
            let newState = {...state,
                messageData:[...state.messageData]};
            let message = { id: 3, messageText: state.currMessageText };
            // newState.messageData = [...state.messageData];
            newState.messageData.push(message);
            newState.currMessageText = '';
            return newState;
        }
        default: return state;
    }
}

export const UpdateMessageTextActionCreator = (currMessageText) =>
    ({ type: UPDATE_MESSAGE_TEXT, currMessageText: currMessageText })

export const SendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export default dialogsReducer;