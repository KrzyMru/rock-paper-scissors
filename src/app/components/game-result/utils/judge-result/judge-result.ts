import type { Shape } from "../../../../types";
import type { GameResult } from "../../types";

const judgeResult = (player: Shape, house: Shape): GameResult => {
    if(player === house)
        return 'tie';

    if(
        (player === 'rock' && house === 'scissors') ||
        (player === 'paper' && house === 'rock') ||
        (player === 'scissors' && house === 'paper')
    )
        return 'win';

    return 'loss';
}

export default judgeResult;