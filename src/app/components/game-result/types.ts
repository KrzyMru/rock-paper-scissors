import type { Shape } from "../../types";

interface GameResultProps {
    shape: Shape,
    onPlayAgain: () => void,
    onGameWin: () => void,
    onGameLose: () => void,
}

type GameResult = 'win' | 'loss' | 'tie';

export type { GameResultProps, GameResult }