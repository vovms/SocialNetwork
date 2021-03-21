import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.ProfileInfo}>
            <div className={s.photo}>
                <img src={props.ProfileInfo.imgSrc}></img>
            </div>
            <div className={s.description}>
                <h2>{props.ProfileInfo.name + " " + props.ProfileInfo.surname}</h2>
                <h4>{"@" + props.ProfileInfo.pseudo}</h4>
                <p>{props.ProfileInfo.decription}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;