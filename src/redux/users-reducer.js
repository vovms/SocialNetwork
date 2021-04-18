const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let User1 = {
    Id: 1,
    NameStruct: { name: "Volodymyr", sername: "Kulesha" },
    ShortName: "Volodymyr K.",
    MainImg: "http://besocial.wp4life.com/wp-content/uploads/avatars/15/58a47d6c83c5c-bpthumb.jpg",
    Status: "I like BEER!!!",
    Location: "Lviv , Ukraine",
    followStatus: true
};

let User2 = {
    Id: 2,
    NameStruct: { name: "Taras", sername: "Shevchenko" },
    ShortName: "Taras S.",
    MainImg: "http://besocial.wp4life.com/wp-content/uploads/avatars/10/58a47b58564bf-bpthumb.jpg",
    Status: "Sadok Vyshneviy ...",
    Location: "Kaniv , Ukraine",
    followStatus: false
};

let User3 = {
    Id: 3,
    NameStruct: { name: "Diane", sername: "Hall" },
    ShortName: "Diane H.",
    MainImg: "http://besocial.wp4life.com/wp-content/uploads/avatars/6/58a476556ef0f-bpthumb.jpg",
    Status: "",
    Location: "New Jersey , USA",
    followStatus: false
};

let User4 = {
    Id: 4,
    NameStruct: { name: "Janet", sername: "Goodwin" },
    ShortName: "Janet G.",
    MainImg: "http://besocial.wp4life.com/wp-content/uploads/avatars/16/58a47ddd489d6-bpthumb.jpg",
    Status: "Uzgorod , Uzgorod misto yak sad !!!",
    Location: "Lviv , Ukraine",
    followStatus: false
};





let initialState = {
    // UsersArray: [User1, User2, User3, User4]
    UsersArray: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                UsersArray: state.UsersArray.map(item => {
                    if (item.Id === action.userId) {
                        return { ...item, followStatus: false }
                    }
                    return item;
                })
            }
        }

        case UNFOLLOW: {
            return {
                ...state,
                UsersArray: state.UsersArray.map(item => {
                    if (item.Id === action.userId) {
                        return { ...item, followStatus: true }
                    }
                    return item;
                })
            }
        }

        case SET_USERS: {
            return {...state,UsersArray :[...state.UsersArray , ...action.users]}
        }

        default: return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;