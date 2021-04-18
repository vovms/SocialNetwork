import { connect } from "react-redux";
import Games from './Games';
import {MakeAMoveActionCreator , NewGameActionCreator} from '../../redux/games-reducer'


let mapStateToProps = (state) => {
    return {
        GamesData: state.Games  
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        MakeAMove :(gridId) => dispatch(MakeAMoveActionCreator(gridId)),
        NewGame :() => dispatch(NewGameActionCreator())
    }
}
const GamesContainer = connect(mapStateToProps,mapDispatchToProps)(Games);

export default GamesContainer;