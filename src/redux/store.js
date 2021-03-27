import { imgSrc, imgSrcNT, imgSrcTS } from './const';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reduser';

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
        },
        sidebar: {}
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

        this._state.Profile =  profileReducer(this._state.Profile,action);
        this._state.Dialogs = dialogsReducer(this._state.Dialogs,action);
        this.rerenderEntireTree(this._state);
    }
}


export default store;

