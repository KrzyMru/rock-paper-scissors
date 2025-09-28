import './app.css';
import Logo from '../assets/images/logo.svg';
import Rock from '../assets/images/icon-rock.svg';
import Paper from '../assets/images/icon-paper.svg';
import Scissors from '../assets/images/icon-scissors.svg';

const App = () => {
  return (
    <main>
      <header>
        <img 
          src={Logo}
          alt='logo'
        />
        <div>
          <span>SCORE</span>
          <span>12</span>
        </div>
      </header>
      <div>
        <button
          type='button'
          title='Paper'
        >
          <div>
            <img 
              src={Paper}
              alt='paper'
            />
          </div>
        </button>
        <button
          type='button'
          title='Scissors'
        >
          <div>
            <img 
              src={Scissors}
              alt='scissors'
            />
          </div>
        </button>
        <button
          type='button'
          title='Rock'
        >
          <div>
            <img 
              src={Rock}
              alt='rock'
            />
          </div>
        </button>
      </div>
      <button
        type='button'
        title='Rules'
      >
        RULES
      </button>
    </main>
  )
}

export default App;
