import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (

        <div className={s.PostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsArr.map(item => <Post message={item.message} />)}
                {/* <Post message="First post" />
                <Post message="Second post" /> */}
            </div>
        </div>
    )
}

let postsArr = [
    {message : 'First post'},
    {message : 'Second post'}
]

export default MyPosts;