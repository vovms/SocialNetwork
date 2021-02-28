import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className='img_content' src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"></img>
            </div>
            <div className={s.item}>
                ava +++ dicr
        </div>
            < MyPosts />
        </div>
    )
}

export default Profile;