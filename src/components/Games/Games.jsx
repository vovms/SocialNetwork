import s from './Games.module.css'

const Games = (props) => {

    let onButtonClick = (id) => {
        props.MakeAMove(id);
    }

    let clickNewGame = () => {
        props.NewGame();
    }

    return (
        <div className={s.gameZone}>
            <h1 className={s.result}>{props.GamesData.winner}</h1>
            <div className={s.Grid}>
                <button className={s.field} onClick={() => onButtonClick('0.0')}>{props.GamesData.gameMatrix[0][0]}</button>
                <button className={s.field} onClick={() => onButtonClick('0.1')}>{props.GamesData.gameMatrix[0][1]}</button>
                <button className={s.field} onClick={() => onButtonClick('0.2')}>{props.GamesData.gameMatrix[0][2]}</button>
                <button className={s.field} onClick={() => onButtonClick('1.0')}>{props.GamesData.gameMatrix[1][0]}</button>
                <button className={s.field} onClick={() => onButtonClick('1.1')}>{props.GamesData.gameMatrix[1][1]}</button>
                <button className={s.field} onClick={() => onButtonClick('1.2')}>{props.GamesData.gameMatrix[1][2]}</button>
                <button className={s.field} onClick={() => onButtonClick('2.0')}>{props.GamesData.gameMatrix[2][0]}</button>
                <button className={s.field} onClick={() => onButtonClick('2.1')}>{props.GamesData.gameMatrix[2][1]}</button>
                <button className={s.field} onClick={() => onButtonClick('2.2')}>{props.GamesData.gameMatrix[2][2]} </button>
            </div>
            <div>
                <button className={s.newGame} onClick={clickNewGame}> Start new Game</button>
            </div>
        </div>
    )
}

export default Games;