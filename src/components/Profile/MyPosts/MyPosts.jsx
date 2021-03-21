import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

import { addPostActionCreator, changePostTextActionCreator } from "../../../redux/store";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch(changePostTextActionCreator(text));  
        newPostElement.current.value = props.newPostText
    }

    return (

        <div className={s.PostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}  className={s.textareaNewPost} ref={newPostElement}/>
                </div>
                <div>
                    <button onClick = {addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.Meesages.map(item => <Post message={item.message} likeCounter={item.likeCounter}/>)}
            </div>
        </div>
    )
}

export default MyPosts;