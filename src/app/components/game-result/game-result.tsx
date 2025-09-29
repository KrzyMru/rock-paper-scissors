import './game-result.css';
import type { GameResultProps } from "./types";
import getRandomShape from "./utils/get-random-shape/get-random-shape";
import judgeResult from "./utils/judge-result/judge-result";

const GameResult = (props: GameResultProps) => {
    const { shape, onGameLose, onGameWin, onPlayAgain } = { ...props }

    const housePick = getRandomShape();
    const gameResult = judgeResult(shape, housePick);

    return (
        <div>{shape} - {housePick}</div>
    );
}

export default GameResult;