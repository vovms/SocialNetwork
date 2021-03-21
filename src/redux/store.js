import { imgSrc, imgSrcNT, imgSrcTS } from './const';

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {

    _state: {
        Profile: {
            Messages:
                [
                    { id: 0, likeCounter: 14, message: 'First post' },
                    { id: 1, likeCounter: 47, message: 'Second post' }
                ],
            ProfileInfo: {
                imgSrc: "http://besocial.wp4life.com/wp-content/uploads/avatars/20/58a47fc735264-bpfull.jpg",
                name: "John",
                surname: "Kovalski",
                pseudo: "vov_ms",
                decription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur impedit doloribus deserunt alias delectus provident deleniti excepturi id soluta non, reiciendis nemo necessitatibus assumenda blanditiis recusandae exercitationem sint, optio suscipit."
            },
            newPostText: 'Type new post text...'
        },
        Dialogs: {
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
    },

    rerenderEntireTree() {

    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },
    getState() {

        return this._state;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let post = { id: 3, likeCounter: 50, message: this._state.Profile.newPostText }
            this._state.Profile.Messages.push(post);
            this._state.Profile.newPostText = '';
            this.rerenderEntireTree(this._state);
        } else if (action.type === CHANGE_POST_TEXT) {
            this._state.Profile.newPostText = action.newPostText;
            this.rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            this._state.Dialogs.currMessageText = action.currMessageText;
            this.rerenderEntireTree(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let message = { id: 3, messageText: this._state.Dialogs.currMessageText };
            this._state.Dialogs.messageData.push(message);
            this._state.Dialogs.currMessageText = '';
            this.rerenderEntireTree(this._state);
        }
    }
}


export default store;

export const addPostActionCreator = () => ({ type: ADD_POST })

export const changePostTextActionCreator = (text) =>
    ({ type: CHANGE_POST_TEXT, newPostText: text })

export const UpdateMessageTextActionCreator = (currMessageText) =>
    ({ type: UPDATE_MESSAGE_TEXT, currMessageText: currMessageText })

export const SendMessageActionCreator = () => ({ type: SEND_MESSAGE })

