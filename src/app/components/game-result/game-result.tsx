import './game-result.css';
import type { GameResultProps } from "./types";
import getRandomShape from "./utils/get-random-shape/get-random-shape";
import judgeResult from "./utils/judge-result/judge-result";
import Rock from '../../../assets/images/icon-rock.svg';
import Paper from '../../../assets/images/icon-paper.svg';
import Scissors from '../../../assets/images/icon-scissors.svg';
import { useEffect, useMemo, useState } from 'react';

const GameResult = (props: GameResultProps) => {
    const { shape, onGameLose, onGameWin, onPlayAgain } = { ...props }
    const [showHousePick, setShowHousePick] = useState<boolean>(false);
    const [showResult, setShowResult] = useState<boolean>(false);

    const housePick = useMemo(() => getRandomShape(), []);
    const gameResult = useMemo(() => judgeResult(shape, housePick), [shape, housePick]);

    const resultText = 
        gameResult === 'win' ? 'YOU WIN' :
        gameResult === 'loss' ? 'YOU LOSE' :
        'TIE';

    const PlayerShapeImg = 
        shape === 'rock' ? Rock :
        shape === 'paper' ? Paper :
        Scissors;
    const HouseShapeImg = 
        housePick === 'rock' ? Rock :
        housePick === 'paper' ? Paper :
        Scissors;

    const playerShapeColor = 
        shape === 'rock' ? 'shape__container--red' :
        shape === 'paper' ? 'shape__container--blue' :
        'shape__container--gold';
    const houseShapeColor = 
        housePick === 'rock' ? 'shape__container--red' :
        housePick === 'paper' ? 'shape__container--blue' :
        'shape__container--gold';

    useEffect(() => {  
        const timer = setTimeout(() => setShowHousePick(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleTriggerResult = () => {
        setShowResult(true);
        if(gameResult === 'win')
            onGameWin();
        else if(gameResult === 'loss')
            onGameLose();
    }

    return (
        <div className='results'>
            <div className='participant participant--player'>
                <span className='participant__text'>YOU PICKED</span>
                <div className={`shape__container ${playerShapeColor}`}>
                    <div className='shape__background'>
                        <img 
                            src={PlayerShapeImg}
                            alt={shape}
                            className='shape__logo'
                        />
                    </div>
                </div>
            </div>
            <div className={`result ${showResult ? 'result--visible' : ''}`}>
                <span className='result__text'>{resultText}</span>
                <button
                    type='button'
                    title='Play again'
                    className='result__button'
                    onClick={onPlayAgain}
                >
                    PLAY AGAIN
                </button>
            </div>
            <div className='participant participant--house'>
                <span className='participant__text'>THE HOUSE PICKED</span>
                {
                    showHousePick ?
                    <div 
                        className={`shape__container ${houseShapeColor} shape__container--house`}
                        onAnimationEnd={handleTriggerResult}
                    >
                        <div className='shape__background'>
                            <img 
                                src={HouseShapeImg}
                                alt={shape}
                                className='shape__logo'
                            />
                        </div>
                    </div>
                    :
                    <div className='participant__placeholder' />
                }
            </div>
        </div>
    );
}

export default GameResult;