import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src="https://itc.ua/wp-content/uploads/2021/02/screen_shot_2020_07_21_at_9.38.25_am.0.png" alt="" />
           {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;