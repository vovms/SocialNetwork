import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo />
            < MyPosts p = {props.postsArr} addPost = {props.addPost}/>
        </div>
    )
}

export default Profile;