const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

let initialState = {
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
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let post = { id: 3, likeCounter: 50, message: state.newPostText }
            state.Messages.push(post);
            state.newPostText = '';
            return state;
        }
        case CHANGE_POST_TEXT: {
            state.newPostText = action.newPostText;
            return state;
        }

        default: return state;
    }

    
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const changePostTextActionCreator = (text) =>
    ({ type: CHANGE_POST_TEXT, newPostText: text })

export default profileReducer;