import './app.css';
import Logo from '../assets/images/logo.svg';
import Rock from '../assets/images/icon-rock.svg';
import Paper from '../assets/images/icon-paper.svg';
import Scissors from '../assets/images/icon-scissors.svg';

const App = () => {
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
          <span className='scoreboard__number'>12</span>
        </div>
      </header>
      <div className='shapes'>
        <button
          type='button'
          title='Paper'
          className='shape__container shape__container--blue shape__container--top-left'
        >
          <div className='shape__background'>
            <img 
              src={Paper}
              alt='paper'
              className='shape__logo'
            />
          </div>
        </button>
        <button
          type='button'
          title='Scissors'
          className='shape__container shape__container--gold shape__container--top-right'
        >
          <div className='shape__background'>
            <img 
              src={Scissors}
              alt='scissors'
              className='shape__logo'
            />
          </div>
        </button>
        <button
          type='button'
          title='Rock'
          className='shape__container shape__container--red shape__container--bottom-middle'
        >
          <div className='shape__background'>
            <img 
              src={Rock}
              alt='rock'
              className='shape__logo'
            />
          </div>
        </button>
      </div>
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
