import s from './UserInfo.module.css';

const UserInfo = (props) => {
    return (
        <div className={s.UserInfo}>
            <div>
                <div>
                    {/* {props.UserInfo.MainImg} */}
                    <img src={props.UserInfo.MainImg} />
                </div>
                {/* <div > */}
                   { props.UserInfo.followStatus ?  <button className={s.follow} onClick = {() => {props.follow(props.UserInfo.Id)}}>"FOLLOW"</button> :
                    <button className={s.follow}onClick = {() => {props.unfollow(props.UserInfo.Id)}}>"UNFOLLOW"</button> }
                {/* </div> */}
            </div>

            <div>
                <div className ={s.nameAndLocation}>
                    <div className={s.shortName}>{props.UserInfo.ShortName}</div>
                    <div className={s.location}>{props.UserInfo.Location}</div>
                </div>
                <div>{props.UserInfo.Status}</div>
            </div>
        </div>
    );
}

export default UserInfo;