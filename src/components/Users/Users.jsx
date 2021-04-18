import UserInfo from './UserInfo/UserInfo';
import s from './Users.module.css';

const Users = (props) => {

    if (props.Users.UsersArray.length === 0){
    props.setUsers(
        [{
            Id: 1,
            NameStruct: { name: "Volodymyr", sername: "Kulesha" },
            ShortName: "Volodymyr K.",
            MainImg: "http://besocial.wp4life.com/wp-content/uploads/avatars/15/58a47d6c83c5c-bpthumb.jpg",
            Status: "I like BEER!!!",
            Location: "Lviv , Ukraine",
            followStatus: true
        },
        {
            Id: 2,
            NameStruct: { name: "Taras", sername: "Shevchenko" },
            ShortName: "Taras S.",
            MainImg: "http://besocial.wp4life.com/wp-content/uploads/avatars/10/58a47b58564bf-bpthumb.jpg",
            Status: "Sadok Vyshneviy ...",
            Location: "Kaniv , Ukraine",
            followStatus: false
        },
        {
            d: 3,
            NameStruct: { name: "Diane", sername: "Hall" },
            ShortName: "Diane H.",
            MainImg: "http://besocial.wp4life.com/wp-content/uploads/avatars/6/58a476556ef0f-bpthumb.jpg",
            Status: "",
            Location: "New Jersey , USA",
            followStatus: false
        },
        {
            Id: 4,
            NameStruct: { name: "Janet", sername: "Goodwin" },
            ShortName: "Janet G.",
            MainImg: "http://besocial.wp4life.com/wp-content/uploads/avatars/16/58a47ddd489d6-bpthumb.jpg",
            Status: "Uzgorod , Uzgorod misto yak sad !!!",
            Location: "Lviv , Ukraine",
            followStatus: false
        }
        ]
    )}

    return (
        <div>
            <div>
                {props.Users.UsersArray.map(item => <UserInfo UserInfo={item} follow={props.follow} unfollow={props.unfollow} />)}
            </div>
            <button className={s.buttonShowMore}>Show more</button>
        </div>
    );
}

export default Users;