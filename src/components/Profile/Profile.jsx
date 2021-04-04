import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPostsContainer'
import ProfileInfoContainer from './ProfileInfo/ProfileInfoContainer';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfoContainer/>
            <MyPosts/>
        </div>
    )
}
////{/* < MyPosts Meesages = {props.ProfileData.Messages} newPostText = {props.ProfileData.newPostText} dispatch = {props.dispatch}/> */}
export default Profile;