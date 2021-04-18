import ProfileInfo from './ProfileInfo';
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        ProfileInfo: state.Profile.ProfileInfo  
    }
}

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);


// const ProfileInfoContainer = (props) => {
//     return (
//         <StoreContext.Consumer>{
//             (store) =>(<ProfileInfo ProfileInfo={store.getState().Profile.ProfileInfo} />)
//         }</StoreContext.Consumer>
//     )
// }

export default ProfileInfoContainer;