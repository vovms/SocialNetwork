import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo ProfileInfo = {props.ProfileData.ProfileInfo}/>
            < MyPosts Meesages = {props.ProfileData.Messages} newPostText = {props.ProfileData.newPostText} dispatch = {props.dispatch}/>
        </div>
    )
}

export default Profile;