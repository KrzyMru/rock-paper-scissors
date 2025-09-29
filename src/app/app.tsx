import './app.css';
import Logo from '../assets/images/logo.svg';
import ShapeTriangle from './components/shape-triangle/shape-triangle';
import { useEffect, useState } from 'react';
import type { Shape } from './types';
import GameResult from './components/game-result/game-result';

const App = () => {
  const [shape, setShape] = useState<Shape|null>(null);
  const [score, setScore] = useState<number>(() => {
    try {
      const score = localStorage.getItem('score');
      return score ? Number(score) : 0;
    } catch (e: unknown) {
      return 0;
    }
  });

  const handleShapeClick = (newShape: Shape) => {
    setShape(newShape);
  }
  const handleResetShape = () => {
    setShape(null);
  }
  const handleGameWin = () => {
    setScore(score => score + 1);
  }
  const handleGameLose = () => {
    setScore(score => score === 0 ? 0 : score - 1);
  }

  useEffect(() => {
    localStorage.setItem('score', score.toString());
  }, [score]);

  return (
    <main className='page'>
      <header className='header'>
        <img 
          src={Logo}
          alt='logo'
          className='header__logo'
        />
        <div className='scoreboard'>
          <span className='scoreboard__text'>SCORE</span>
          <span className='scoreboard__number'>{score}</span>
        </div>
      </header>
      {
        shape ?
        <GameResult 
          shape={shape}
          onPlayAgain={handleResetShape}
          onGameWin={handleGameWin}
          onGameLose={handleGameLose}
        />
        :
        <ShapeTriangle 
          onShapeClick={handleShapeClick}
        />
      }
      <button
        type='button'
        title='Rules'
        className='rules'
      >
        RULES
      </button>
    </main>
  )
}

export default App;
