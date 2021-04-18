import Users from './Users';
import { connect } from "react-redux";


import { followAC, unfollowAC, setUsersAC } from "./../../redux/users-reducer";


let mapStateToProps = (state) => {
    return {
        Users: state.Users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followAC(userId)) },
        unfollow: (userId) => { dispatch(unfollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;