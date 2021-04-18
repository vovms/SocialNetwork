import MyPosts from './MyPosts'
import { connect } from "react-redux";

import { addPostActionCreator, changePostTextActionCreator } from "../../../redux/profile-reducer";

// const MyPostsContainer = (props) => {

//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState();

//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }

//                 let onPostChange = (text) => {
//                     store.dispatch(changePostTextActionCreator(text));
//                 }

//                 return < MyPosts Meesages={state.Profile.Messages} newPostText={state.Profile.newPostText}
//                     updateNewPostText={onPostChange} addNewPost={addPost} />
//             }
//         }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => {
    return {
        Meesages: state.Profile.Messages,
        newPostText: state.Profile.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(changePostTextActionCreator(text));
        },
        addNewPost: () => {
            dispatch(addPostActionCreator());
        }

    }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;